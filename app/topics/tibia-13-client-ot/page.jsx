import Tibia13ClientOtKeywordPage, { generateMetadata } from './tibia-13-client-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13ClientOtKeywordPage />;
}
