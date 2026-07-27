import PopularUnlineRulesKeywordPage, { generateMetadata } from './popular-unline-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularUnlineRulesKeywordPage />;
}
