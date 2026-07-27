import TibiaOtServerSeasonKeywordPage, { generateMetadata } from './tibia-ot-server-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaOtServerSeasonKeywordPage />;
}
