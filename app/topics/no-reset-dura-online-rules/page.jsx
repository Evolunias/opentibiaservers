import NoResetDuraOnlineRulesKeywordPage, { generateMetadata } from './no-reset-dura-online-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetDuraOnlineRulesKeywordPage />;
}
