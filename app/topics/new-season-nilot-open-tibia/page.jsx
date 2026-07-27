import NewSeasonNilotOpenTibiaKeywordPage, { generateMetadata } from './new-season-nilot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonNilotOpenTibiaKeywordPage />;
}
