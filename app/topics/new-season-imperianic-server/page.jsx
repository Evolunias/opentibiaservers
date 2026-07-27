import NewSeasonImperianicServerKeywordPage, { generateMetadata } from './new-season-imperianic-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonImperianicServerKeywordPage />;
}
