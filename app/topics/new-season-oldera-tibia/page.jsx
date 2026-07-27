import NewSeasonOlderaTibiaKeywordPage, { generateMetadata } from './new-season-oldera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonOlderaTibiaKeywordPage />;
}
