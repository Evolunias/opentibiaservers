import VineraRareItemsKeywordPage, { generateMetadata } from './vinera-rare-items';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VineraRareItemsKeywordPage />;
}
