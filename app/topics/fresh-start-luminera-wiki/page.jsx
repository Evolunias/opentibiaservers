import FreshStartLumineraWikiKeywordPage, { generateMetadata } from './fresh-start-luminera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartLumineraWikiKeywordPage />;
}
