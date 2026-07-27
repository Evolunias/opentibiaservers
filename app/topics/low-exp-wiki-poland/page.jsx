import LowExpWikiPolandKeywordPage, { generateMetadata } from './low-exp-wiki-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpWikiPolandKeywordPage />;
}
