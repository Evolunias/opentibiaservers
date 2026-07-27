import EternalOdysseyShopKeywordPage, { generateMetadata } from './eternal-odyssey-shop';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EternalOdysseyShopKeywordPage />;
}
