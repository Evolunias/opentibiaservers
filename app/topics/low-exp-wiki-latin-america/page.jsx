import LowExpWikiLatinAmericaKeywordPage, { generateMetadata } from './low-exp-wiki-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpWikiLatinAmericaKeywordPage />;
}
