import Tibia81ClientOtKeywordPage, { generateMetadata } from './tibia-8-1-client-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81ClientOtKeywordPage />;
}
