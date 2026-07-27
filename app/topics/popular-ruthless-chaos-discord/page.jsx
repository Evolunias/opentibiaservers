import PopularRuthlessChaosDiscordKeywordPage, { generateMetadata } from './popular-ruthless-chaos-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRuthlessChaosDiscordKeywordPage />;
}
