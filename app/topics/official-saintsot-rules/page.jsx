import OfficialSaintsotRulesKeywordPage, { generateMetadata } from './official-saintsot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialSaintsotRulesKeywordPage />;
}
