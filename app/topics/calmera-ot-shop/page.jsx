import CalmeraOtShopKeywordPage, { generateMetadata } from './calmera-ot-shop';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOtShopKeywordPage />;
}
