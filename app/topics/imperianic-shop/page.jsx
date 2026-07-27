import ImperianicShopKeywordPage, { generateMetadata } from './imperianic-shop';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ImperianicShopKeywordPage />;
}
