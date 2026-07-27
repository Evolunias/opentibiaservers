import WithDiscordRuthlessChaosServerKeywordPage, { generateMetadata } from './with-discord-ruthless-chaos-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordRuthlessChaosServerKeywordPage />;
}
