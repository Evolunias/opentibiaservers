import PopularImperianicWebsiteKeywordPage, { generateMetadata } from './popular-imperianic-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularImperianicWebsiteKeywordPage />;
}
