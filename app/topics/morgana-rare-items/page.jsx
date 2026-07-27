import MorganaRareItemsKeywordPage, { generateMetadata } from './morgana-rare-items';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MorganaRareItemsKeywordPage />;
}
