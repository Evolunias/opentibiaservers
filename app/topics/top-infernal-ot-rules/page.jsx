import TopInfernalOtRulesKeywordPage, { generateMetadata } from './top-infernal-ot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopInfernalOtRulesKeywordPage />;
}
