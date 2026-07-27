import LowrateCarlinotRulesKeywordPage, { generateMetadata } from './lowrate-carlinot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCarlinotRulesKeywordPage />;
}
