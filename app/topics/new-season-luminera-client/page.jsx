import NewSeasonLumineraClientKeywordPage, { generateMetadata } from './new-season-luminera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonLumineraClientKeywordPage />;
}
