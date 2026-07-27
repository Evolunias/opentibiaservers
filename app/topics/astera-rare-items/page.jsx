import AsteraRareItemsKeywordPage, { generateMetadata } from './astera-rare-items';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AsteraRareItemsKeywordPage />;
}
