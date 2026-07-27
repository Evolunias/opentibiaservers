import CurrentEmpirebrRulesKeywordPage, { generateMetadata } from './current-empirebr-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentEmpirebrRulesKeywordPage />;
}
