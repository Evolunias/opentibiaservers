import BestHarmoniaOtRulesKeywordPage, { generateMetadata } from './best-harmonia-ot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestHarmoniaOtRulesKeywordPage />;
}
