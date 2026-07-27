import NewSeasonCanobClientKeywordPage, { generateMetadata } from './new-season-canob-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCanobClientKeywordPage />;
}
