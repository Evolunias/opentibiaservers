import LowrateEvoleraRulesKeywordPage, { generateMetadata } from './lowrate-evolera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateEvoleraRulesKeywordPage />;
}
