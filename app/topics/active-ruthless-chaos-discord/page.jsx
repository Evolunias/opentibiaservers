import ActiveRuthlessChaosDiscordKeywordPage, { generateMetadata } from './active-ruthless-chaos-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRuthlessChaosDiscordKeywordPage />;
}
