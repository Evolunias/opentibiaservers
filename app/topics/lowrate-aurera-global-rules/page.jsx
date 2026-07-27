import LowrateAureraGlobalRulesKeywordPage, { generateMetadata } from './lowrate-aurera-global-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateAureraGlobalRulesKeywordPage />;
}
