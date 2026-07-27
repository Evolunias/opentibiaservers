import JameraRareItemsKeywordPage, { generateMetadata } from './jamera-rare-items';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <JameraRareItemsKeywordPage />;
}
