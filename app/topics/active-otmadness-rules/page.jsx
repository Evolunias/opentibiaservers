import ActiveOtmadnessRulesKeywordPage, { generateMetadata } from './active-otmadness-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveOtmadnessRulesKeywordPage />;
}
