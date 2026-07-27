import BestZuneraOtRulesKeywordPage, { generateMetadata } from './best-zunera-ot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestZuneraOtRulesKeywordPage />;
}
