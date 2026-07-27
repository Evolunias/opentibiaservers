import NoResetMediviaRulesKeywordPage, { generateMetadata } from './no-reset-medivia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetMediviaRulesKeywordPage />;
}
