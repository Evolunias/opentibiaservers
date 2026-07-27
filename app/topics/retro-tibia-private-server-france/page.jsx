import RetroTibiaPrivateServerFranceKeywordPage, { generateMetadata } from './retro-tibia-private-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroTibiaPrivateServerFranceKeywordPage />;
}
