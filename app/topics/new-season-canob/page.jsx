import NewSeasonCanobKeywordPage, { generateMetadata } from './new-season-canob';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCanobKeywordPage />;
}
