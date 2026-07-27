import LowExpWikiUkKeywordPage, { generateMetadata } from './low-exp-wiki-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpWikiUkKeywordPage />;
}
