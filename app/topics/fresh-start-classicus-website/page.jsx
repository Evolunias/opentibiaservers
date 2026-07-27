import FreshStartClassicusWebsiteKeywordPage, { generateMetadata } from './fresh-start-classicus-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartClassicusWebsiteKeywordPage />;
}
