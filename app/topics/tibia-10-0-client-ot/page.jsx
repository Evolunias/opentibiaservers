import Tibia100ClientOtKeywordPage, { generateMetadata } from './tibia-10-0-client-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100ClientOtKeywordPage />;
}
