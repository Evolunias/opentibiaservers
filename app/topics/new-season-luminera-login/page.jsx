import NewSeasonLumineraLoginKeywordPage, { generateMetadata } from './new-season-luminera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonLumineraLoginKeywordPage />;
}
