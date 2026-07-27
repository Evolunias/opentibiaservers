import SeasonalTibiaPrivateServerFranceKeywordPage, { generateMetadata } from './seasonal-tibia-private-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalTibiaPrivateServerFranceKeywordPage />;
}
