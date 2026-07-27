import WithDiscordSerenityRegisterKeywordPage, { generateMetadata } from './with-discord-serenity-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordSerenityRegisterKeywordPage />;
}
