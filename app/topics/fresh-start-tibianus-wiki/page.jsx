import FreshStartTibianusWikiKeywordPage, { generateMetadata } from './fresh-start-tibianus-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibianusWikiKeywordPage />;
}
