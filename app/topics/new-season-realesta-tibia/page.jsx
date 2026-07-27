import NewSeasonRealestaTibiaKeywordPage, { generateMetadata } from './new-season-realesta-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonRealestaTibiaKeywordPage />;
}
