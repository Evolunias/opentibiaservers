import NewSeasonThorniaOpenTibiaKeywordPage, { generateMetadata } from './new-season-thornia-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonThorniaOpenTibiaKeywordPage />;
}
