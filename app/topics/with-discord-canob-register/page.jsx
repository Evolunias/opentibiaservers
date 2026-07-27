import WithDiscordCanobRegisterKeywordPage, { generateMetadata } from './with-discord-canob-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCanobRegisterKeywordPage />;
}
