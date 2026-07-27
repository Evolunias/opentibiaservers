import WithDiscordNilotRegisterKeywordPage, { generateMetadata } from './with-discord-nilot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNilotRegisterKeywordPage />;
}
