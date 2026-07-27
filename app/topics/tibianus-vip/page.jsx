import TibianusVipKeywordPage, { generateMetadata } from './tibianus-vip';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusVipKeywordPage />;
}
