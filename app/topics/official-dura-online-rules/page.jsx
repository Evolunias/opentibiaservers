import OfficialDuraOnlineRulesKeywordPage, { generateMetadata } from './official-dura-online-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialDuraOnlineRulesKeywordPage />;
}
