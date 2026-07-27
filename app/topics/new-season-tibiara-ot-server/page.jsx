import NewSeasonTibiaraOtServerKeywordPage, { generateMetadata } from './new-season-tibiara-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiaraOtServerKeywordPage />;
}
