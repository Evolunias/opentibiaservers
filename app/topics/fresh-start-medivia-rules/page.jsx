import FreshStartMediviaRulesKeywordPage, { generateMetadata } from './fresh-start-medivia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartMediviaRulesKeywordPage />;
}
