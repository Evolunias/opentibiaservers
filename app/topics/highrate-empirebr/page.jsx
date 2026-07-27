import HighrateEmpirebrKeywordPage, { generateMetadata } from './highrate-empirebr';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateEmpirebrKeywordPage />;
}
