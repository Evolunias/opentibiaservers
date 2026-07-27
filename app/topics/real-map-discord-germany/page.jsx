import RealMapDiscordGermanyKeywordPage, { generateMetadata } from './real-map-discord-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapDiscordGermanyKeywordPage />;
}
