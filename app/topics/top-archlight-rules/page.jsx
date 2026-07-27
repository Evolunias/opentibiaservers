import TopArchlightRulesKeywordPage, { generateMetadata } from './top-archlight-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopArchlightRulesKeywordPage />;
}
