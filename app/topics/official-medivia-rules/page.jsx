import OfficialMediviaRulesKeywordPage, { generateMetadata } from './official-medivia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMediviaRulesKeywordPage />;
}
