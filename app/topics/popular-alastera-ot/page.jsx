import PopularAlasteraOtKeywordPage, { generateMetadata } from './popular-alastera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularAlasteraOtKeywordPage />;
}
