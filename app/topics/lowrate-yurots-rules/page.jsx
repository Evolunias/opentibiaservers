import LowrateYurotsRulesKeywordPage, { generateMetadata } from './lowrate-yurots-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateYurotsRulesKeywordPage />;
}
