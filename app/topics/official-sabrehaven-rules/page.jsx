import OfficialSabrehavenRulesKeywordPage, { generateMetadata } from './official-sabrehaven-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialSabrehavenRulesKeywordPage />;
}
