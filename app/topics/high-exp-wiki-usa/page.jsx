import HighExpWikiUsaKeywordPage, { generateMetadata } from './high-exp-wiki-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpWikiUsaKeywordPage />;
}
