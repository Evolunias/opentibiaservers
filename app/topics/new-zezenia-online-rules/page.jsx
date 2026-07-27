import NewZezeniaOnlineRulesKeywordPage, { generateMetadata } from './new-zezenia-online-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewZezeniaOnlineRulesKeywordPage />;
}
