import BestEmpirebrRulesKeywordPage, { generateMetadata } from './best-empirebr-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestEmpirebrRulesKeywordPage />;
}
