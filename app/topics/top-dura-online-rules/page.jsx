import TopDuraOnlineRulesKeywordPage, { generateMetadata } from './top-dura-online-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopDuraOnlineRulesKeywordPage />;
}
