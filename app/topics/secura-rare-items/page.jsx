import SecuraRareItemsKeywordPage, { generateMetadata } from './secura-rare-items';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SecuraRareItemsKeywordPage />;
}
