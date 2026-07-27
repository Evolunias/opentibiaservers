import NewSeasonThorniaServerKeywordPage, { generateMetadata } from './new-season-thornia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonThorniaServerKeywordPage />;
}
