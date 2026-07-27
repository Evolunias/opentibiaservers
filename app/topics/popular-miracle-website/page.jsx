import PopularMiracleWebsiteKeywordPage, { generateMetadata } from './popular-miracle-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMiracleWebsiteKeywordPage />;
}
