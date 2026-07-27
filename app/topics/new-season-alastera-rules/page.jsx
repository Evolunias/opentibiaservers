import NewSeasonAlasteraRulesKeywordPage, { generateMetadata } from './new-season-alastera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonAlasteraRulesKeywordPage />;
}
