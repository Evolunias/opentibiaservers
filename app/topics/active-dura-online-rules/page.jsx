import ActiveDuraOnlineRulesKeywordPage, { generateMetadata } from './active-dura-online-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveDuraOnlineRulesKeywordPage />;
}
