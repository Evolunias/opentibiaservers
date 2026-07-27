import CurrentMediviaRulesKeywordPage, { generateMetadata } from './current-medivia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMediviaRulesKeywordPage />;
}
