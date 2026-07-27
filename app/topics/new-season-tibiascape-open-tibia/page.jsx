import NewSeasonTibiascapeOpenTibiaKeywordPage, { generateMetadata } from './new-season-tibiascape-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiascapeOpenTibiaKeywordPage />;
}
