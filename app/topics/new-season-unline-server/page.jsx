import NewSeasonUnlineServerKeywordPage, { generateMetadata } from './new-season-unline-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonUnlineServerKeywordPage />;
}
