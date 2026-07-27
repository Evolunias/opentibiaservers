import NewSeasonImperianicClientKeywordPage, { generateMetadata } from './new-season-imperianic-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonImperianicClientKeywordPage />;
}
