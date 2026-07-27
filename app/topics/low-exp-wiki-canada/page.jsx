import LowExpWikiCanadaKeywordPage, { generateMetadata } from './low-exp-wiki-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpWikiCanadaKeywordPage />;
}
