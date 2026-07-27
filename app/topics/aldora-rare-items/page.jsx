import AldoraRareItemsKeywordPage, { generateMetadata } from './aldora-rare-items';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AldoraRareItemsKeywordPage />;
}
