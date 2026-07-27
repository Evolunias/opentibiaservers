import PopularAlasteraWebsiteKeywordPage, { generateMetadata } from './popular-alastera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularAlasteraWebsiteKeywordPage />;
}
