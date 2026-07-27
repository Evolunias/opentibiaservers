import NoResetEvoleraRulesKeywordPage, { generateMetadata } from './no-reset-evolera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetEvoleraRulesKeywordPage />;
}
