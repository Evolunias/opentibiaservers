import RealMapSabrehavenDiscordKeywordPage, { generateMetadata } from './real-map-sabrehaven-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapSabrehavenDiscordKeywordPage />;
}
