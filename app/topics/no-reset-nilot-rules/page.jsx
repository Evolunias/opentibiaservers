import NoResetNilotRulesKeywordPage, { generateMetadata } from './no-reset-nilot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetNilotRulesKeywordPage />;
}
