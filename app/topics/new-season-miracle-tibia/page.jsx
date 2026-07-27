import NewSeasonMiracleTibiaKeywordPage, { generateMetadata } from './new-season-miracle-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMiracleTibiaKeywordPage />;
}
