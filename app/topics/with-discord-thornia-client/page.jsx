import WithDiscordThorniaClientKeywordPage, { generateMetadata } from './with-discord-thornia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordThorniaClientKeywordPage />;
}
