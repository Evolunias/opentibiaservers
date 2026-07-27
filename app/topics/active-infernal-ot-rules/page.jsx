import ActiveInfernalOtRulesKeywordPage, { generateMetadata } from './active-infernal-ot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveInfernalOtRulesKeywordPage />;
}
