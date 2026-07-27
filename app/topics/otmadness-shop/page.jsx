import OtmadnessShopKeywordPage, { generateMetadata } from './otmadness-shop';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessShopKeywordPage />;
}
