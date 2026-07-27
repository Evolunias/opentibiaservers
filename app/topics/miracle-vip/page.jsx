import MiracleVipKeywordPage, { generateMetadata } from './miracle-vip';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MiracleVipKeywordPage />;
}
