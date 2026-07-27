import ArchlightShopKeywordPage, { generateMetadata } from './archlight-shop';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightShopKeywordPage />;
}
