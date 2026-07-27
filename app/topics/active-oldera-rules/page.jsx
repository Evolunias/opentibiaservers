import ActiveOlderaRulesKeywordPage, { generateMetadata } from './active-oldera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveOlderaRulesKeywordPage />;
}
