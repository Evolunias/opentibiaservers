import CustomArchlightRulesKeywordPage, { generateMetadata } from './custom-archlight-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomArchlightRulesKeywordPage />;
}
