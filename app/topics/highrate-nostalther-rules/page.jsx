import HighrateNostaltherRulesKeywordPage, { generateMetadata } from './highrate-nostalther-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateNostaltherRulesKeywordPage />;
}
