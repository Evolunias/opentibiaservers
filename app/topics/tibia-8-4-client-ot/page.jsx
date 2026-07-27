import Tibia84ClientOtKeywordPage, { generateMetadata } from './tibia-8-4-client-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84ClientOtKeywordPage />;
}
