import UniteraRareItemsKeywordPage, { generateMetadata } from './unitera-rare-items';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UniteraRareItemsKeywordPage />;
}
