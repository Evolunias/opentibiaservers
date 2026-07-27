import RealMapDiscordPolandKeywordPage, { generateMetadata } from './real-map-discord-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapDiscordPolandKeywordPage />;
}
