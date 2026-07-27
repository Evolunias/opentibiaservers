import CurrentZuneraOtRulesKeywordPage, { generateMetadata } from './current-zunera-ot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentZuneraOtRulesKeywordPage />;
}
