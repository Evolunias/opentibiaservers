import WithDiscordThorniaLoginKeywordPage, { generateMetadata } from './with-discord-thornia-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordThorniaLoginKeywordPage />;
}
