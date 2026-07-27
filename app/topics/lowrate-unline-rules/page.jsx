import LowrateUnlineRulesKeywordPage, { generateMetadata } from './lowrate-unline-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateUnlineRulesKeywordPage />;
}
