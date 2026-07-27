import TrashformersShopKeywordPage, { generateMetadata } from './trashformers-shop';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrashformersShopKeywordPage />;
}
