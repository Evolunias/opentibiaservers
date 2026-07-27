import EterniaRareItemsKeywordPage, { generateMetadata } from './eternia-rare-items';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EterniaRareItemsKeywordPage />;
}
