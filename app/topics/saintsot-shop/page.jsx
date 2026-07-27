import SaintsotShopKeywordPage, { generateMetadata } from './saintsot-shop';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotShopKeywordPage />;
}
