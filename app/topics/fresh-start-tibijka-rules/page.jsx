import FreshStartTibijkaRulesKeywordPage, { generateMetadata } from './fresh-start-tibijka-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibijkaRulesKeywordPage />;
}
