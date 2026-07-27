import NewSeasonOlderaOtKeywordPage, { generateMetadata } from './new-season-oldera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonOlderaOtKeywordPage />;
}
