import CyntaraVipKeywordPage, { generateMetadata } from './cyntara-vip';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraVipKeywordPage />;
}
