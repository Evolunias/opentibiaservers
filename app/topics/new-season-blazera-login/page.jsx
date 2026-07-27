import NewSeasonBlazeraLoginKeywordPage, { generateMetadata } from './new-season-blazera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonBlazeraLoginKeywordPage />;
}
