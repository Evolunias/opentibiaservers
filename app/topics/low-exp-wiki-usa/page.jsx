import LowExpWikiUsaKeywordPage, { generateMetadata } from './low-exp-wiki-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpWikiUsaKeywordPage />;
}
