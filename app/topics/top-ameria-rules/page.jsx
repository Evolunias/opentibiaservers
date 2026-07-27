import TopAmeriaRulesKeywordPage, { generateMetadata } from './top-ameria-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopAmeriaRulesKeywordPage />;
}
