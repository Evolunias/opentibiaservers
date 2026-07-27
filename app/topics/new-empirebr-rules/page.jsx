import NewEmpirebrRulesKeywordPage, { generateMetadata } from './new-empirebr-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewEmpirebrRulesKeywordPage />;
}
