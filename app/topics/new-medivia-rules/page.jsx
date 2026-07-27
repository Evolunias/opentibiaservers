import NewMediviaRulesKeywordPage, { generateMetadata } from './new-medivia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMediviaRulesKeywordPage />;
}
