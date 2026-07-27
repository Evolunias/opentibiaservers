import ClassickDrakoriaShopKeywordPage, { generateMetadata } from './classick-drakoria-shop';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassickDrakoriaShopKeywordPage />;
}
