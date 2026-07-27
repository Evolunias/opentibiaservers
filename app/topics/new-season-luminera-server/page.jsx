import NewSeasonLumineraServerKeywordPage, { generateMetadata } from './new-season-luminera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonLumineraServerKeywordPage />;
}
