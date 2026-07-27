import NewSeasonDuraOnlineTibiaKeywordPage, { generateMetadata } from './new-season-dura-online-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonDuraOnlineTibiaKeywordPage />;
}
