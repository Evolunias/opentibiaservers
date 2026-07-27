import HighExpWikiSwedenKeywordPage, { generateMetadata } from './high-exp-wiki-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpWikiSwedenKeywordPage />;
}
