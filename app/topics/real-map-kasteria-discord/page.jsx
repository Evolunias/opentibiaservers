import RealMapKasteriaDiscordKeywordPage, { generateMetadata } from './real-map-kasteria-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapKasteriaDiscordKeywordPage />;
}
