import LowrateEmpirebrOtsKeywordPage, { generateMetadata } from './lowrate-empirebr-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateEmpirebrOtsKeywordPage />;
}
