import WithDiscordSabrehavenGuideKeywordPage, { generateMetadata } from './with-discord-sabrehaven-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordSabrehavenGuideKeywordPage />;
}
