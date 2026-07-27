import TopZuneraOtRulesKeywordPage, { generateMetadata } from './top-zunera-ot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopZuneraOtRulesKeywordPage />;
}
