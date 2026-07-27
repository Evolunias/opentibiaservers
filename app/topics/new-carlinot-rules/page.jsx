import NewCarlinotRulesKeywordPage, { generateMetadata } from './new-carlinot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCarlinotRulesKeywordPage />;
}
