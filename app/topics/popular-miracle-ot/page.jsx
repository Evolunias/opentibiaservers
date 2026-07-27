import PopularMiracleOtKeywordPage, { generateMetadata } from './popular-miracle-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMiracleOtKeywordPage />;
}
