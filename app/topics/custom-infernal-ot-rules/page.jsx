import CustomInfernalOtRulesKeywordPage, { generateMetadata } from './custom-infernal-ot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomInfernalOtRulesKeywordPage />;
}
