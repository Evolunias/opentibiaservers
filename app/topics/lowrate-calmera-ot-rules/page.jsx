import LowrateCalmeraOtRulesKeywordPage, { generateMetadata } from './lowrate-calmera-ot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCalmeraOtRulesKeywordPage />;
}
