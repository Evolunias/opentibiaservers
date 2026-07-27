import NoResetCarlinotRulesKeywordPage, { generateMetadata } from './no-reset-carlinot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetCarlinotRulesKeywordPage />;
}
