import CustomDuraOnlineRulesKeywordPage, { generateMetadata } from './custom-dura-online-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomDuraOnlineRulesKeywordPage />;
}
