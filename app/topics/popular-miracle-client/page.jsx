import PopularMiracleClientKeywordPage, { generateMetadata } from './popular-miracle-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMiracleClientKeywordPage />;
}
