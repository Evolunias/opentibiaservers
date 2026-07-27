import ActiveNilotRulesKeywordPage, { generateMetadata } from './active-nilot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNilotRulesKeywordPage />;
}
