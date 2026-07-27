import RuberaRareItemsKeywordPage, { generateMetadata } from './rubera-rare-items';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RuberaRareItemsKeywordPage />;
}
