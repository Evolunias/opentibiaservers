import WithDiscordYurotsRegisterKeywordPage, { generateMetadata } from './with-discord-yurots-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordYurotsRegisterKeywordPage />;
}
