import OfficialNostaltherRulesKeywordPage, { generateMetadata } from './official-nostalther-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNostaltherRulesKeywordPage />;
}
