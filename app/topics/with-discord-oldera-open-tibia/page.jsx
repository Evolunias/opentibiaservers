import WithDiscordOlderaOpenTibiaKeywordPage, { generateMetadata } from './with-discord-oldera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordOlderaOpenTibiaKeywordPage />;
}
