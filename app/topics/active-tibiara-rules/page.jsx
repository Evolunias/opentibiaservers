import ActiveTibiaraRulesKeywordPage, { generateMetadata } from './active-tibiara-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiaraRulesKeywordPage />;
}
