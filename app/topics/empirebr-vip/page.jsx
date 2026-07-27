import EmpirebrVipKeywordPage, { generateMetadata } from './empirebr-vip';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrVipKeywordPage />;
}
