import NewSeasonImperianicRulesKeywordPage, { generateMetadata } from './new-season-imperianic-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonImperianicRulesKeywordPage />;
}
