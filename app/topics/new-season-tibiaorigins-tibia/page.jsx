import NewSeasonTibiaoriginsTibiaKeywordPage, { generateMetadata } from './new-season-tibiaorigins-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiaoriginsTibiaKeywordPage />;
}
