import RealMapDiscordUsaKeywordPage, { generateMetadata } from './real-map-discord-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapDiscordUsaKeywordPage />;
}
