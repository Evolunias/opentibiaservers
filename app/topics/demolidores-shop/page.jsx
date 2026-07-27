import DemolidoresShopKeywordPage, { generateMetadata } from './demolidores-shop';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresShopKeywordPage />;
}
