import HighExpWikiArgentinaKeywordPage, { generateMetadata } from './high-exp-wiki-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpWikiArgentinaKeywordPage />;
}
