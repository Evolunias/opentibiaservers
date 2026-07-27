import HighExpWikiCanadaKeywordPage, { generateMetadata } from './high-exp-wiki-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpWikiCanadaKeywordPage />;
}
