import HighrateArchlightRulesKeywordPage, { generateMetadata } from './highrate-archlight-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateArchlightRulesKeywordPage />;
}
