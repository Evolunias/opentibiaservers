import RangerSArcaniShopKeywordPage, { generateMetadata } from './ranger-s-arcani-shop';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniShopKeywordPage />;
}
