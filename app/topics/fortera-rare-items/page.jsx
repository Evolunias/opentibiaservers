import ForteraRareItemsKeywordPage, { generateMetadata } from './fortera-rare-items';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ForteraRareItemsKeywordPage />;
}
