import OfficialLumineraWikiKeywordPage, { generateMetadata } from './official-luminera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialLumineraWikiKeywordPage />;
}
