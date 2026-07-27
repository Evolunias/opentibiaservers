import GuardiaWikiKeywordPage, { generateMetadata } from './guardia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GuardiaWikiKeywordPage />;
}
