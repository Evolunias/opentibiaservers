import AnticaRareItemsKeywordPage, { generateMetadata } from './antica-rare-items';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AnticaRareItemsKeywordPage />;
}
