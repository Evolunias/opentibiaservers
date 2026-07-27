import FreshStartNtoStarRulesKeywordPage, { generateMetadata } from './fresh-start-nto-star-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartNtoStarRulesKeywordPage />;
}
