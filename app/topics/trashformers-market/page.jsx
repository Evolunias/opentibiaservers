import TrashformersMarketKeywordPage, { generateMetadata } from './trashformers-market';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrashformersMarketKeywordPage />;
}
