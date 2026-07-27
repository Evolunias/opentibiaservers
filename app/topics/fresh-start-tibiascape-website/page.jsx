import FreshStartTibiascapeWebsiteKeywordPage, { generateMetadata } from './fresh-start-tibiascape-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibiascapeWebsiteKeywordPage />;
}
