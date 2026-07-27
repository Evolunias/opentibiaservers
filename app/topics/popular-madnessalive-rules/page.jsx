import PopularMadnessaliveRulesKeywordPage, { generateMetadata } from './popular-madnessalive-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMadnessaliveRulesKeywordPage />;
}
