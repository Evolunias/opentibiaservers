import NewSeasonThorniaLoginKeywordPage, { generateMetadata } from './new-season-thornia-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonThorniaLoginKeywordPage />;
}
