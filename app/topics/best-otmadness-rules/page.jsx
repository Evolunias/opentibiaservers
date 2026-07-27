import BestOtmadnessRulesKeywordPage, { generateMetadata } from './best-otmadness-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestOtmadnessRulesKeywordPage />;
}
