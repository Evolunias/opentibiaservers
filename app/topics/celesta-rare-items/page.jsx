import CelestaRareItemsKeywordPage, { generateMetadata } from './celesta-rare-items';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CelestaRareItemsKeywordPage />;
}
