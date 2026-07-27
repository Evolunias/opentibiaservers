import OfficialZezeniaOnlineRulesKeywordPage, { generateMetadata } from './official-zezenia-online-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialZezeniaOnlineRulesKeywordPage />;
}
