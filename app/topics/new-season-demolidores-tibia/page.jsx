import NewSeasonDemolidoresTibiaKeywordPage, { generateMetadata } from './new-season-demolidores-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonDemolidoresTibiaKeywordPage />;
}
