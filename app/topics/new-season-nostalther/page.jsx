import NewSeasonNostaltherKeywordPage, { generateMetadata } from './new-season-nostalther';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonNostaltherKeywordPage />;
}
