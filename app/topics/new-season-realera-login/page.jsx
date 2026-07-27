import NewSeasonRealeraLoginKeywordPage, { generateMetadata } from './new-season-realera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonRealeraLoginKeywordPage />;
}
