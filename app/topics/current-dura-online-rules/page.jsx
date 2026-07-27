import CurrentDuraOnlineRulesKeywordPage, { generateMetadata } from './current-dura-online-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentDuraOnlineRulesKeywordPage />;
}
