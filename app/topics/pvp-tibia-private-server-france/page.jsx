import PvpTibiaPrivateServerFranceKeywordPage, { generateMetadata } from './pvp-tibia-private-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpTibiaPrivateServerFranceKeywordPage />;
}
