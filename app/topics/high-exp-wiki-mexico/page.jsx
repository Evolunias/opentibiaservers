import HighExpWikiMexicoKeywordPage, { generateMetadata } from './high-exp-wiki-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpWikiMexicoKeywordPage />;
}
