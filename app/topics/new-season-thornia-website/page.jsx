import NewSeasonThorniaWebsiteKeywordPage, { generateMetadata } from './new-season-thornia-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonThorniaWebsiteKeywordPage />;
}
