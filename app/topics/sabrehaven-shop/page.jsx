import SabrehavenShopKeywordPage, { generateMetadata } from './sabrehaven-shop';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenShopKeywordPage />;
}
