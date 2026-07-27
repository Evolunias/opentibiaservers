import TopTibijkaRulesKeywordPage, { generateMetadata } from './top-tibijka-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibijkaRulesKeywordPage />;
}
