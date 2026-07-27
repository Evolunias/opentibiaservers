import PytheraRareItemsKeywordPage, { generateMetadata } from './pythera-rare-items';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PytheraRareItemsKeywordPage />;
}
