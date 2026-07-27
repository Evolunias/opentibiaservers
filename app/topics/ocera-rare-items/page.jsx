import OceraRareItemsKeywordPage, { generateMetadata } from './ocera-rare-items';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OceraRareItemsKeywordPage />;
}
