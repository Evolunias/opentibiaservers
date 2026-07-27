import FreshStartKasteriaWebsiteKeywordPage, { generateMetadata } from './fresh-start-kasteria-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartKasteriaWebsiteKeywordPage />;
}
