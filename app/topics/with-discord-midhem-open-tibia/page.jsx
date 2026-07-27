import WithDiscordMidhemOpenTibiaKeywordPage, { generateMetadata } from './with-discord-midhem-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordMidhemOpenTibiaKeywordPage />;
}
