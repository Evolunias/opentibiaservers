import NewDuraOnlineRulesKeywordPage, { generateMetadata } from './new-dura-online-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewDuraOnlineRulesKeywordPage />;
}
