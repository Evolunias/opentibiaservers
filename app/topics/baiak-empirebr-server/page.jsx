import BaiakEmpirebrServerKeywordPage, { generateMetadata } from './baiak-empirebr-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakEmpirebrServerKeywordPage />;
}
