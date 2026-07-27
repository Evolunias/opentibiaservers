import FreshStartEvoleraRulesKeywordPage, { generateMetadata } from './fresh-start-evolera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartEvoleraRulesKeywordPage />;
}
