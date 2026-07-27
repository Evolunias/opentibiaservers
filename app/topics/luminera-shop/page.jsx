import LumineraShopKeywordPage, { generateMetadata } from './luminera-shop';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraShopKeywordPage />;
}
