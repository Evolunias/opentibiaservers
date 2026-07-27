import NewSeasonTibiameTibiaKeywordPage, { generateMetadata } from './new-season-tibiame-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiameTibiaKeywordPage />;
}
