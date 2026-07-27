import HighrateNilotRulesKeywordPage, { generateMetadata } from './highrate-nilot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateNilotRulesKeywordPage />;
}
