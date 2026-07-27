import ActiveLumineraWikiKeywordPage, { generateMetadata } from './active-luminera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveLumineraWikiKeywordPage />;
}
