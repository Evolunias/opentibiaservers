import PopularAlasteraOtsKeywordPage, { generateMetadata } from './popular-alastera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularAlasteraOtsKeywordPage />;
}
