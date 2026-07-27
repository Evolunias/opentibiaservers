import FreshStartNilotRulesKeywordPage, { generateMetadata } from './fresh-start-nilot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartNilotRulesKeywordPage />;
}
