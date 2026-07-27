import PopularMiracleOtServerKeywordPage, { generateMetadata } from './popular-miracle-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMiracleOtServerKeywordPage />;
}
