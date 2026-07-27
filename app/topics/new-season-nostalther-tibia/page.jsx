import NewSeasonNostaltherTibiaKeywordPage, { generateMetadata } from './new-season-nostalther-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonNostaltherTibiaKeywordPage />;
}
