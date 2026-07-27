import CanobWikiKeywordPage, { generateMetadata } from './canob-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobWikiKeywordPage />;
}
