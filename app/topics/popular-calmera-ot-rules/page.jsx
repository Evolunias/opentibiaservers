import PopularCalmeraOtRulesKeywordPage, { generateMetadata } from './popular-calmera-ot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCalmeraOtRulesKeywordPage />;
}
