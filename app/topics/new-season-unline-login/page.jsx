import NewSeasonUnlineLoginKeywordPage, { generateMetadata } from './new-season-unline-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonUnlineLoginKeywordPage />;
}
