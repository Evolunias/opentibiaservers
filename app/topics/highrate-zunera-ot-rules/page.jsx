import HighrateZuneraOtRulesKeywordPage, { generateMetadata } from './highrate-zunera-ot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateZuneraOtRulesKeywordPage />;
}
