import WithDiscordCoxaotOpenTibiaKeywordPage, { generateMetadata } from './with-discord-coxaot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCoxaotOpenTibiaKeywordPage />;
}
