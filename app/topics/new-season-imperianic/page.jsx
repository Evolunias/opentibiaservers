import NewSeasonImperianicKeywordPage, { generateMetadata } from './new-season-imperianic';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonImperianicKeywordPage />;
}
