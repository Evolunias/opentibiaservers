import NewSeasonTibiascapeOtKeywordPage, { generateMetadata } from './new-season-tibiascape-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiascapeOtKeywordPage />;
}
