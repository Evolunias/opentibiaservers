import PopularEmpirebrRulesKeywordPage, { generateMetadata } from './popular-empirebr-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularEmpirebrRulesKeywordPage />;
}
