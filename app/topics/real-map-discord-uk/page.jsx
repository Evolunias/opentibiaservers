import RealMapDiscordUkKeywordPage, { generateMetadata } from './real-map-discord-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapDiscordUkKeywordPage />;
}
