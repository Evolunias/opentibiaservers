import NoResetRubinotRulesKeywordPage, { generateMetadata } from './no-reset-rubinot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetRubinotRulesKeywordPage />;
}
