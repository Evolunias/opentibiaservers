import HighrateKasteriaRulesKeywordPage, { generateMetadata } from './highrate-kasteria-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateKasteriaRulesKeywordPage />;
}
