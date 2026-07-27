import OfficialNepreniaRulesKeywordPage, { generateMetadata } from './official-neprenia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNepreniaRulesKeywordPage />;
}
