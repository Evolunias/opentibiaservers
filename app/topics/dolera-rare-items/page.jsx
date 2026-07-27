import DoleraRareItemsKeywordPage, { generateMetadata } from './dolera-rare-items';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DoleraRareItemsKeywordPage />;
}
