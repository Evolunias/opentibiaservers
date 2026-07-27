import BestMediviaRulesKeywordPage, { generateMetadata } from './best-medivia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestMediviaRulesKeywordPage />;
}
