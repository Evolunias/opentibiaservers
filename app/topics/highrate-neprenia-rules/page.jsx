import HighrateNepreniaRulesKeywordPage, { generateMetadata } from './highrate-neprenia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateNepreniaRulesKeywordPage />;
}
