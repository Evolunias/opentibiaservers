import TibiaretroShopKeywordPage, { generateMetadata } from './tibiaretro-shop';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroShopKeywordPage />;
}
