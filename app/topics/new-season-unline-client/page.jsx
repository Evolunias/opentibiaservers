import NewSeasonUnlineClientKeywordPage, { generateMetadata } from './new-season-unline-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonUnlineClientKeywordPage />;
}
