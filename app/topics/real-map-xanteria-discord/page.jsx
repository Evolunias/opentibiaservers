import RealMapXanteriaDiscordKeywordPage, { generateMetadata } from './real-map-xanteria-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapXanteriaDiscordKeywordPage />;
}
