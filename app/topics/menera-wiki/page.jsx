import MeneraWikiKeywordPage, { generateMetadata } from './menera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MeneraWikiKeywordPage />;
}
