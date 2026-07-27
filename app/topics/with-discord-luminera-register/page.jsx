import WithDiscordLumineraRegisterKeywordPage, { generateMetadata } from './with-discord-luminera-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordLumineraRegisterKeywordPage />;
}
