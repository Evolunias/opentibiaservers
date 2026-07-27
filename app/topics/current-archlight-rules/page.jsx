import CurrentArchlightRulesKeywordPage, { generateMetadata } from './current-archlight-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentArchlightRulesKeywordPage />;
}
