import NewSeasonEvoleraLoginKeywordPage, { generateMetadata } from './new-season-evolera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonEvoleraLoginKeywordPage />;
}
