import LowrateLumineraWikiKeywordPage, { generateMetadata } from './lowrate-luminera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateLumineraWikiKeywordPage />;
}
