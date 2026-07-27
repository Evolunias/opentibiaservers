import LowrateZuneraOtRulesKeywordPage, { generateMetadata } from './lowrate-zunera-ot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateZuneraOtRulesKeywordPage />;
}
