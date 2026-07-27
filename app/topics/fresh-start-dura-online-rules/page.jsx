import FreshStartDuraOnlineRulesKeywordPage, { generateMetadata } from './fresh-start-dura-online-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartDuraOnlineRulesKeywordPage />;
}
