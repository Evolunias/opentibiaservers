import PopularMiracleOtsKeywordPage, { generateMetadata } from './popular-miracle-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMiracleOtsKeywordPage />;
}
