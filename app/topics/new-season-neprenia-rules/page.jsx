import NewSeasonNepreniaRulesKeywordPage, { generateMetadata } from './new-season-neprenia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonNepreniaRulesKeywordPage />;
}
