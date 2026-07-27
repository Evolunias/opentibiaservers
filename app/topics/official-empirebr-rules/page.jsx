import OfficialEmpirebrRulesKeywordPage, { generateMetadata } from './official-empirebr-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialEmpirebrRulesKeywordPage />;
}
