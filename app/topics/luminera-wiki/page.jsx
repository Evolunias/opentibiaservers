import LumineraWikiKeywordPage, { generateMetadata } from './luminera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraWikiKeywordPage />;
}
