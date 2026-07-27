import LowrateMadnessaliveRulesKeywordPage, { generateMetadata } from './lowrate-madnessalive-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateMadnessaliveRulesKeywordPage />;
}
