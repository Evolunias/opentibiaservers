import NewSeasonNostaltherWikiKeywordPage, { generateMetadata } from './new-season-nostalther-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonNostaltherWikiKeywordPage />;
}
