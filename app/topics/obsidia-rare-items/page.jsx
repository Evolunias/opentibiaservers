import ObsidiaRareItemsKeywordPage, { generateMetadata } from './obsidia-rare-items';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ObsidiaRareItemsKeywordPage />;
}
