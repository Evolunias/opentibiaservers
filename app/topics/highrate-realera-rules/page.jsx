import HighrateRealeraRulesKeywordPage, { generateMetadata } from './highrate-realera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateRealeraRulesKeywordPage />;
}
