import HoneraWikiKeywordPage, { generateMetadata } from './honera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HoneraWikiKeywordPage />;
}
