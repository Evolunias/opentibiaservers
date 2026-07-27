import TitaniaRareItemsKeywordPage, { generateMetadata } from './titania-rare-items';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TitaniaRareItemsKeywordPage />;
}
