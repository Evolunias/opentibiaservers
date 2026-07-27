import LowrateDuraOnlineRulesKeywordPage, { generateMetadata } from './lowrate-dura-online-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateDuraOnlineRulesKeywordPage />;
}
