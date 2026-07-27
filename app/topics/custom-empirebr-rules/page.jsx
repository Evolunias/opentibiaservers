import CustomEmpirebrRulesKeywordPage, { generateMetadata } from './custom-empirebr-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomEmpirebrRulesKeywordPage />;
}
