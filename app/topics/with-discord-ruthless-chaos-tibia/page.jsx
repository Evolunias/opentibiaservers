import WithDiscordRuthlessChaosTibiaKeywordPage, { generateMetadata } from './with-discord-ruthless-chaos-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordRuthlessChaosTibiaKeywordPage />;
}
