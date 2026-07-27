import PopularEvoleraRulesKeywordPage, { generateMetadata } from './popular-evolera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularEvoleraRulesKeywordPage />;
}
