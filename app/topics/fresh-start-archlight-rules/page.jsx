import FreshStartArchlightRulesKeywordPage, { generateMetadata } from './fresh-start-archlight-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartArchlightRulesKeywordPage />;
}
