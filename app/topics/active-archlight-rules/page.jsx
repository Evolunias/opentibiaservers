import ActiveArchlightRulesKeywordPage, { generateMetadata } from './active-archlight-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveArchlightRulesKeywordPage />;
}
