import LowExpWikiGermanyKeywordPage, { generateMetadata } from './low-exp-wiki-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpWikiGermanyKeywordPage />;
}
