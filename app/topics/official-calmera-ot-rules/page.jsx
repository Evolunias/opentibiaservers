import OfficialCalmeraOtRulesKeywordPage, { generateMetadata } from './official-calmera-ot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCalmeraOtRulesKeywordPage />;
}
