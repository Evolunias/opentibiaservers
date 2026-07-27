import LuceraRareItemsKeywordPage, { generateMetadata } from './lucera-rare-items';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LuceraRareItemsKeywordPage />;
}
