import RetroOpenTibiaServerFranceKeywordPage, { generateMetadata } from './retro-open-tibia-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroOpenTibiaServerFranceKeywordPage />;
}
