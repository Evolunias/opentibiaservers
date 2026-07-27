import ActiveEvoleraRulesKeywordPage, { generateMetadata } from './active-evolera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveEvoleraRulesKeywordPage />;
}
