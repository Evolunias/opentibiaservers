import UnlineVipKeywordPage, { generateMetadata } from './unline-vip';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineVipKeywordPage />;
}
