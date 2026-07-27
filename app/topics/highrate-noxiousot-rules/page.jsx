import HighrateNoxiousotRulesKeywordPage, { generateMetadata } from './highrate-noxiousot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateNoxiousotRulesKeywordPage />;
}
