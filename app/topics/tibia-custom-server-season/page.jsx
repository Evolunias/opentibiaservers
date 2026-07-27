import TibiaCustomServerSeasonKeywordPage, { generateMetadata } from './tibia-custom-server-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaCustomServerSeasonKeywordPage />;
}
