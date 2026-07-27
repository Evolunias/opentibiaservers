import ActiveCarlinotRulesKeywordPage, { generateMetadata } from './active-carlinot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveCarlinotRulesKeywordPage />;
}
