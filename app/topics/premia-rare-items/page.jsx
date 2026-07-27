import PremiaRareItemsKeywordPage, { generateMetadata } from './premia-rare-items';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PremiaRareItemsKeywordPage />;
}
