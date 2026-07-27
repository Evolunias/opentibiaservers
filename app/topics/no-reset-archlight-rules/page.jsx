import NoResetArchlightRulesKeywordPage, { generateMetadata } from './no-reset-archlight-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetArchlightRulesKeywordPage />;
}
