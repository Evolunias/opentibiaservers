import HighrateRubinotRulesKeywordPage, { generateMetadata } from './highrate-rubinot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateRubinotRulesKeywordPage />;
}
