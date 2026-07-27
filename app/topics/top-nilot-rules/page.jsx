import TopNilotRulesKeywordPage, { generateMetadata } from './top-nilot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNilotRulesKeywordPage />;
}
