import Tibia86ClientOtKeywordPage, { generateMetadata } from './tibia-8-6-client-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86ClientOtKeywordPage />;
}
