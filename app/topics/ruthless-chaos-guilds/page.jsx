import RuthlessChaosGuildsKeywordPage, { generateMetadata } from './ruthless-chaos-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RuthlessChaosGuildsKeywordPage />;
}
