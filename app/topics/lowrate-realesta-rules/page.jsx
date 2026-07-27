import LowrateRealestaRulesKeywordPage, { generateMetadata } from './lowrate-realesta-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateRealestaRulesKeywordPage />;
}
