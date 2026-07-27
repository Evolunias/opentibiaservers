import CustomMadnessaliveRulesKeywordPage, { generateMetadata } from './custom-madnessalive-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMadnessaliveRulesKeywordPage />;
}
