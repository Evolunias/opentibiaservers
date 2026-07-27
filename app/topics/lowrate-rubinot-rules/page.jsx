import LowrateRubinotRulesKeywordPage, { generateMetadata } from './lowrate-rubinot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateRubinotRulesKeywordPage />;
}
