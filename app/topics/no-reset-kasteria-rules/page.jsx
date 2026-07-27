import NoResetKasteriaRulesKeywordPage, { generateMetadata } from './no-reset-kasteria-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetKasteriaRulesKeywordPage />;
}
