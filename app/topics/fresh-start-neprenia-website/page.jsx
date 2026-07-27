import FreshStartNepreniaWebsiteKeywordPage, { generateMetadata } from './fresh-start-neprenia-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartNepreniaWebsiteKeywordPage />;
}
