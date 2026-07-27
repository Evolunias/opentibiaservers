import NewSeasonImperianicLoginKeywordPage, { generateMetadata } from './new-season-imperianic-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonImperianicLoginKeywordPage />;
}
