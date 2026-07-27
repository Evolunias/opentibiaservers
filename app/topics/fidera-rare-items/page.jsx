import FideraRareItemsKeywordPage, { generateMetadata } from './fidera-rare-items';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FideraRareItemsKeywordPage />;
}
