import NewSeasonCanobOtsKeywordPage, { generateMetadata } from './new-season-canob-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCanobOtsKeywordPage />;
}
