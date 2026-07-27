import WithDiscordElderaRegisterKeywordPage, { generateMetadata } from './with-discord-eldera-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordElderaRegisterKeywordPage />;
}
