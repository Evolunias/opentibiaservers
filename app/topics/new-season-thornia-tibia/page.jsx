import NewSeasonThorniaTibiaKeywordPage, { generateMetadata } from './new-season-thornia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonThorniaTibiaKeywordPage />;
}
