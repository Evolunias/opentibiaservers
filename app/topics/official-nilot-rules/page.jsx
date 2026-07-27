import OfficialNilotRulesKeywordPage, { generateMetadata } from './official-nilot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNilotRulesKeywordPage />;
}
