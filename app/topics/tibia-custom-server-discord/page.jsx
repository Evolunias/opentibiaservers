import TibiaCustomServerDiscordKeywordPage, { generateMetadata } from './tibia-custom-server-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaCustomServerDiscordKeywordPage />;
}
