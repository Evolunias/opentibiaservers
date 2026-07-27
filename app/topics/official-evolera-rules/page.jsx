import OfficialEvoleraRulesKeywordPage, { generateMetadata } from './official-evolera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialEvoleraRulesKeywordPage />;
}
