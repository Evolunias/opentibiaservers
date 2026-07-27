import DuraOnlineRulesKeywordPage, { generateMetadata } from './dura-online-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineRulesKeywordPage />;
}
