import HighrateCarlinotRulesKeywordPage, { generateMetadata } from './highrate-carlinot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCarlinotRulesKeywordPage />;
}
