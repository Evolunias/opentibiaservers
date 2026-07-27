import NewSeasonTibiaretroOtKeywordPage, { generateMetadata } from './new-season-tibiaretro-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiaretroOtKeywordPage />;
}
