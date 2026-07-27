import WithDiscordCoxaotTibiaKeywordPage, { generateMetadata } from './with-discord-coxaot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCoxaotTibiaKeywordPage />;
}
