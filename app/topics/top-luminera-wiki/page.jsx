import TopLumineraWikiKeywordPage, { generateMetadata } from './top-luminera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopLumineraWikiKeywordPage />;
}
