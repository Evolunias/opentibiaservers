import NoResetHarmoniaOtRulesKeywordPage, { generateMetadata } from './no-reset-harmonia-ot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetHarmoniaOtRulesKeywordPage />;
}
