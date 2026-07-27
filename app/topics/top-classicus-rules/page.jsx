import TopClassicusRulesKeywordPage, { generateMetadata } from './top-classicus-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopClassicusRulesKeywordPage />;
}
