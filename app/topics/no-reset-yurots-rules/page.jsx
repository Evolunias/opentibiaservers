import NoResetYurotsRulesKeywordPage, { generateMetadata } from './no-reset-yurots-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetYurotsRulesKeywordPage />;
}
