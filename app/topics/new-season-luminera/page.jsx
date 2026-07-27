import NewSeasonLumineraKeywordPage, { generateMetadata } from './new-season-luminera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonLumineraKeywordPage />;
}
