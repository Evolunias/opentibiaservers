import HighrateImperianicRulesKeywordPage, { generateMetadata } from './highrate-imperianic-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateImperianicRulesKeywordPage />;
}
