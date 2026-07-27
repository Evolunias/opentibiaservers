import WithDiscordRuthlessChaosClientKeywordPage, { generateMetadata } from './with-discord-ruthless-chaos-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordRuthlessChaosClientKeywordPage />;
}
