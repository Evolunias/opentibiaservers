import ClassicusShopKeywordPage, { generateMetadata } from './classicus-shop';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusShopKeywordPage />;
}
