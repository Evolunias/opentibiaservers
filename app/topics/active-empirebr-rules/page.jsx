import ActiveEmpirebrRulesKeywordPage, { generateMetadata } from './active-empirebr-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveEmpirebrRulesKeywordPage />;
}
