import TrimeraRareItemsKeywordPage, { generateMetadata } from './trimera-rare-items';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrimeraRareItemsKeywordPage />;
}
