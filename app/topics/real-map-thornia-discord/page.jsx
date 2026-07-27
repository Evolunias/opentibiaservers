import RealMapThorniaDiscordKeywordPage, { generateMetadata } from './real-map-thornia-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapThorniaDiscordKeywordPage />;
}
