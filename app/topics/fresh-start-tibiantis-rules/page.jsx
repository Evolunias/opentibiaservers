import FreshStartTibiantisRulesKeywordPage, { generateMetadata } from './fresh-start-tibiantis-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibiantisRulesKeywordPage />;
}
