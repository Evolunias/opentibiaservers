import GuardiaRareItemsKeywordPage, { generateMetadata } from './guardia-rare-items';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GuardiaRareItemsKeywordPage />;
}
