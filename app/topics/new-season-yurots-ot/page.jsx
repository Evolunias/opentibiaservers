import NewSeasonYurotsOtKeywordPage, { generateMetadata } from './new-season-yurots-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonYurotsOtKeywordPage />;
}
