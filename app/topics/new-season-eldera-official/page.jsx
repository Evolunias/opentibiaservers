import NewSeasonElderaOfficialKeywordPage, { generateMetadata } from './new-season-eldera-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonElderaOfficialKeywordPage />;
}
