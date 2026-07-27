import TopEmpirebrRulesKeywordPage, { generateMetadata } from './top-empirebr-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopEmpirebrRulesKeywordPage />;
}
