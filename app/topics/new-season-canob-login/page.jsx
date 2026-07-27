import NewSeasonCanobLoginKeywordPage, { generateMetadata } from './new-season-canob-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCanobLoginKeywordPage />;
}
