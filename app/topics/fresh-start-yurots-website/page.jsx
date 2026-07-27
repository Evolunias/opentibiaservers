import FreshStartYurotsWebsiteKeywordPage, { generateMetadata } from './fresh-start-yurots-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartYurotsWebsiteKeywordPage />;
}
