import NewSeasonThorniaClientKeywordPage, { generateMetadata } from './new-season-thornia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonThorniaClientKeywordPage />;
}
