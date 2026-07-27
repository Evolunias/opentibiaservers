import JuleraRareItemsKeywordPage, { generateMetadata } from './julera-rare-items';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <JuleraRareItemsKeywordPage />;
}
