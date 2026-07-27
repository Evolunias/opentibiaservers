import NewOlderaRulesKeywordPage, { generateMetadata } from './new-oldera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewOlderaRulesKeywordPage />;
}
