import HarmoniaRareItemsKeywordPage, { generateMetadata } from './harmonia-rare-items';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaRareItemsKeywordPage />;
}
