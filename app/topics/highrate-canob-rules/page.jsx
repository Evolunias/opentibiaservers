import HighrateCanobRulesKeywordPage, { generateMetadata } from './highrate-canob-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCanobRulesKeywordPage />;
}
