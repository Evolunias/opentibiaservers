import BlazeraShopKeywordPage, { generateMetadata } from './blazera-shop';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraShopKeywordPage />;
}
