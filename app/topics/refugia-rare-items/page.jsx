import RefugiaRareItemsKeywordPage, { generateMetadata } from './refugia-rare-items';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RefugiaRareItemsKeywordPage />;
}
