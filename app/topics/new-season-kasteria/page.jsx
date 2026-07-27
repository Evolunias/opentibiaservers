import NewSeasonKasteriaKeywordPage, { generateMetadata } from './new-season-kasteria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonKasteriaKeywordPage />;
}
