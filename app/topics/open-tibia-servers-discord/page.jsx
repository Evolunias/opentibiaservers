import OpenTibiaServersDiscordKeywordPage, { generateMetadata } from './open-tibia-servers-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OpenTibiaServersDiscordKeywordPage />;
}
