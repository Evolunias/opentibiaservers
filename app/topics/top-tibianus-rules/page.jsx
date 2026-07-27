import TopTibianusRulesKeywordPage, { generateMetadata } from './top-tibianus-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibianusRulesKeywordPage />;
}
