import NewSeasonOlderaOtServerKeywordPage, { generateMetadata } from './new-season-oldera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonOlderaOtServerKeywordPage />;
}
