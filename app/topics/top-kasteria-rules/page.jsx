import TopKasteriaRulesKeywordPage, { generateMetadata } from './top-kasteria-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopKasteriaRulesKeywordPage />;
}
