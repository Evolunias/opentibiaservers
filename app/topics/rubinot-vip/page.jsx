import RubinotVipKeywordPage, { generateMetadata } from './rubinot-vip';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotVipKeywordPage />;
}
