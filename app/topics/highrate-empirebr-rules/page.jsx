import HighrateEmpirebrRulesKeywordPage, { generateMetadata } from './highrate-empirebr-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateEmpirebrRulesKeywordPage />;
}
