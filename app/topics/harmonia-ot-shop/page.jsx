import HarmoniaOtShopKeywordPage, { generateMetadata } from './harmonia-ot-shop';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOtShopKeywordPage />;
}
