import CurrentHarmoniaOtRulesKeywordPage, { generateMetadata } from './current-harmonia-ot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentHarmoniaOtRulesKeywordPage />;
}
