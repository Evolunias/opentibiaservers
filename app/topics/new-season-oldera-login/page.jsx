import NewSeasonOlderaLoginKeywordPage, { generateMetadata } from './new-season-oldera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonOlderaLoginKeywordPage />;
}
