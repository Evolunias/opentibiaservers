import PopularInfernalOtRulesKeywordPage, { generateMetadata } from './popular-infernal-ot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularInfernalOtRulesKeywordPage />;
}
