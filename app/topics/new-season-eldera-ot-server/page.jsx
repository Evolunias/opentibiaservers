import NewSeasonElderaOtServerKeywordPage, { generateMetadata } from './new-season-eldera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonElderaOtServerKeywordPage />;
}
