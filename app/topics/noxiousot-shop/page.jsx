import NoxiousotShopKeywordPage, { generateMetadata } from './noxiousot-shop';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoxiousotShopKeywordPage />;
}
