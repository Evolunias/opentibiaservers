import OxygenotVipKeywordPage, { generateMetadata } from './oxygenot-vip';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotVipKeywordPage />;
}
