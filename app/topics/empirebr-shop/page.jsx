import EmpirebrShopKeywordPage, { generateMetadata } from './empirebr-shop';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrShopKeywordPage />;
}
