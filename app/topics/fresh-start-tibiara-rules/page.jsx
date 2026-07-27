import FreshStartTibiaraRulesKeywordPage, { generateMetadata } from './fresh-start-tibiara-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibiaraRulesKeywordPage />;
}
