import HighrateEmpirebrServerKeywordPage, { generateMetadata } from './highrate-empirebr-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateEmpirebrServerKeywordPage />;
}
