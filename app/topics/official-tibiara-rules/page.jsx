import OfficialTibiaraRulesKeywordPage, { generateMetadata } from './official-tibiara-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiaraRulesKeywordPage />;
}
