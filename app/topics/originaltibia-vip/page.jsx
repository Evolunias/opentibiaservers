import OriginaltibiaVipKeywordPage, { generateMetadata } from './originaltibia-vip';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginaltibiaVipKeywordPage />;
}
