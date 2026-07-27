import CustomZezeniaOnlineRulesKeywordPage, { generateMetadata } from './custom-zezenia-online-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomZezeniaOnlineRulesKeywordPage />;
}
