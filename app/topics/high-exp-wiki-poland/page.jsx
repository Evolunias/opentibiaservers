import HighExpWikiPolandKeywordPage, { generateMetadata } from './high-exp-wiki-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpWikiPolandKeywordPage />;
}
