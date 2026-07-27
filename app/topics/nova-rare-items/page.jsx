import NovaRareItemsKeywordPage, { generateMetadata } from './nova-rare-items';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NovaRareItemsKeywordPage />;
}
