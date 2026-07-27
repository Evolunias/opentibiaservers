import InfernalOtShopKeywordPage, { generateMetadata } from './infernal-ot-shop';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOtShopKeywordPage />;
}
