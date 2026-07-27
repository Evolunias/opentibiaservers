import LowExpWikiMexicoKeywordPage, { generateMetadata } from './low-exp-wiki-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpWikiMexicoKeywordPage />;
}
