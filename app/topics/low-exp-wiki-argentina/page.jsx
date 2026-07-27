import LowExpWikiArgentinaKeywordPage, { generateMetadata } from './low-exp-wiki-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpWikiArgentinaKeywordPage />;
}
