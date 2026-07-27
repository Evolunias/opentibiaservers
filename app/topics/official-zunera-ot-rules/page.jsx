import OfficialZuneraOtRulesKeywordPage, { generateMetadata } from './official-zunera-ot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialZuneraOtRulesKeywordPage />;
}
