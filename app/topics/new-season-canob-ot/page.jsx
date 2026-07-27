import NewSeasonCanobOtKeywordPage, { generateMetadata } from './new-season-canob-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCanobOtKeywordPage />;
}
