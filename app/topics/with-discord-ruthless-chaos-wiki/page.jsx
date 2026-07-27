import WithDiscordRuthlessChaosWikiKeywordPage, { generateMetadata } from './with-discord-ruthless-chaos-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordRuthlessChaosWikiKeywordPage />;
}
