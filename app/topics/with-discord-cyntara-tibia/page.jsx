import WithDiscordCyntaraTibiaKeywordPage, { generateMetadata } from './with-discord-cyntara-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCyntaraTibiaKeywordPage />;
}
