import NewSeasonCanobServerKeywordPage, { generateMetadata } from './new-season-canob-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCanobServerKeywordPage />;
}
