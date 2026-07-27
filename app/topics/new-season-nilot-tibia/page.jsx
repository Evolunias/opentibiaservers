import NewSeasonNilotTibiaKeywordPage, { generateMetadata } from './new-season-nilot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonNilotTibiaKeywordPage />;
}
