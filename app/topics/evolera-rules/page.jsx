import EvoleraRulesKeywordPage, { generateMetadata } from './evolera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraRulesKeywordPage />;
}
