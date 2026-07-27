import NoResetSabrehavenRulesKeywordPage, { generateMetadata } from './no-reset-sabrehaven-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetSabrehavenRulesKeywordPage />;
}
