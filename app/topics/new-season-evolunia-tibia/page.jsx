import NewSeasonEvoluniaTibiaKeywordPage, { generateMetadata } from './new-season-evolunia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonEvoluniaTibiaKeywordPage />;
}
