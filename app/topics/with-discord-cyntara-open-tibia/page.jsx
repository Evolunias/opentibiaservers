import WithDiscordCyntaraOpenTibiaKeywordPage, { generateMetadata } from './with-discord-cyntara-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCyntaraOpenTibiaKeywordPage />;
}
