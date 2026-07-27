import FreshStartTibiascapeRulesKeywordPage, { generateMetadata } from './fresh-start-tibiascape-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibiascapeRulesKeywordPage />;
}
