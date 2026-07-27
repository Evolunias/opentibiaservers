import TibiaraSeasonKeywordPage, { generateMetadata } from './tibiara-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraSeasonKeywordPage />;
}
