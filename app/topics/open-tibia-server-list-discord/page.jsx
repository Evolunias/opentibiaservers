import OpenTibiaServerListDiscordKeywordPage, { generateMetadata } from './open-tibia-server-list-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OpenTibiaServerListDiscordKeywordPage />;
}
