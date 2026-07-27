import TopOtmadnessRulesKeywordPage, { generateMetadata } from './top-otmadness-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopOtmadnessRulesKeywordPage />;
}
