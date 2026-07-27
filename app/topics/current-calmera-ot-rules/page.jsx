import CurrentCalmeraOtRulesKeywordPage, { generateMetadata } from './current-calmera-ot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCalmeraOtRulesKeywordPage />;
}
