import SerenityShopKeywordPage, { generateMetadata } from './serenity-shop';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityShopKeywordPage />;
}
