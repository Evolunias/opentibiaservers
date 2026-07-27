import NoResetRealeraRulesKeywordPage, { generateMetadata } from './no-reset-realera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetRealeraRulesKeywordPage />;
}
