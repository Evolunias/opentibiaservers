import CyntaraShopKeywordPage, { generateMetadata } from './cyntara-shop';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraShopKeywordPage />;
}
