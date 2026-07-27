import CoxaotVipKeywordPage, { generateMetadata } from './coxaot-vip';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotVipKeywordPage />;
}
