import WithDiscordGuideMexicoKeywordPage, { generateMetadata } from './with-discord-guide-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordGuideMexicoKeywordPage />;
}
