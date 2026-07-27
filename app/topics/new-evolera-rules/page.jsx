import NewEvoleraRulesKeywordPage, { generateMetadata } from './new-evolera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewEvoleraRulesKeywordPage />;
}
