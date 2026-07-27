import NewSeasonElderaOtKeywordPage, { generateMetadata } from './new-season-eldera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonElderaOtKeywordPage />;
}
