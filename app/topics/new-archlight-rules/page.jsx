import NewArchlightRulesKeywordPage, { generateMetadata } from './new-archlight-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewArchlightRulesKeywordPage />;
}
