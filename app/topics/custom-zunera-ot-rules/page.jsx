import CustomZuneraOtRulesKeywordPage, { generateMetadata } from './custom-zunera-ot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomZuneraOtRulesKeywordPage />;
}
