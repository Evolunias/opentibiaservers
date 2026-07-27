import FreshStartOlderaRulesKeywordPage, { generateMetadata } from './fresh-start-oldera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartOlderaRulesKeywordPage />;
}
