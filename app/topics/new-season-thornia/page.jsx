import NewSeasonThorniaKeywordPage, { generateMetadata } from './new-season-thornia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonThorniaKeywordPage />;
}
