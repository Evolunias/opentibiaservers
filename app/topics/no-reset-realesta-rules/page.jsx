import NoResetRealestaRulesKeywordPage, { generateMetadata } from './no-reset-realesta-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetRealestaRulesKeywordPage />;
}
