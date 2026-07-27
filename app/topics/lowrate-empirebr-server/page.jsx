import LowrateEmpirebrServerKeywordPage, { generateMetadata } from './lowrate-empirebr-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateEmpirebrServerKeywordPage />;
}
