import PvpOpenTibiaServerFranceKeywordPage, { generateMetadata } from './pvp-open-tibia-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpOpenTibiaServerFranceKeywordPage />;
}
