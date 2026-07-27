import WithDiscordRealestaRegisterKeywordPage, { generateMetadata } from './with-discord-realesta-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordRealestaRegisterKeywordPage />;
}
