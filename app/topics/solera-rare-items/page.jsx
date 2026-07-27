import SoleraRareItemsKeywordPage, { generateMetadata } from './solera-rare-items';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SoleraRareItemsKeywordPage />;
}
