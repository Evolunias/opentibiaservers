import NewSeasonYurotsOtServerKeywordPage, { generateMetadata } from './new-season-yurots-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonYurotsOtServerKeywordPage />;
}
