import NewZuneraOtRulesKeywordPage, { generateMetadata } from './new-zunera-ot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewZuneraOtRulesKeywordPage />;
}
