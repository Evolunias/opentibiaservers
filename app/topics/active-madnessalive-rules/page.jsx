import ActiveMadnessaliveRulesKeywordPage, { generateMetadata } from './active-madnessalive-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMadnessaliveRulesKeywordPage />;
}
