import WithDiscordRuthlessChaosKeywordPage, { generateMetadata } from './with-discord-ruthless-chaos';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordRuthlessChaosKeywordPage />;
}
