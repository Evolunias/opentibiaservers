import NewSeasonCanobOtServerKeywordPage, { generateMetadata } from './new-season-canob-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCanobOtServerKeywordPage />;
}
