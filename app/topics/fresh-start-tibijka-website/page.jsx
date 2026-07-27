import FreshStartTibijkaWebsiteKeywordPage, { generateMetadata } from './fresh-start-tibijka-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibijkaWebsiteKeywordPage />;
}
