import NewSeasonTibiaraLoginKeywordPage, { generateMetadata } from './new-season-tibiara-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiaraLoginKeywordPage />;
}
