import NewSeasonTibiaretroRulesKeywordPage, { generateMetadata } from './new-season-tibiaretro-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiaretroRulesKeywordPage />;
}
