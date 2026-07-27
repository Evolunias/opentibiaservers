import HighrateEmpirebrOtsKeywordPage, { generateMetadata } from './highrate-empirebr-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateEmpirebrOtsKeywordPage />;
}
