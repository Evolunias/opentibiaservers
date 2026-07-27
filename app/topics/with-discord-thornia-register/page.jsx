import WithDiscordThorniaRegisterKeywordPage, { generateMetadata } from './with-discord-thornia-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordThorniaRegisterKeywordPage />;
}
