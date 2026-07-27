import NewSeasonElderaClientKeywordPage, { generateMetadata } from './new-season-eldera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonElderaClientKeywordPage />;
}
