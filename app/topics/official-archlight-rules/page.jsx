import OfficialArchlightRulesKeywordPage, { generateMetadata } from './official-archlight-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialArchlightRulesKeywordPage />;
}
