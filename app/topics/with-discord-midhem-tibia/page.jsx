import WithDiscordMidhemTibiaKeywordPage, { generateMetadata } from './with-discord-midhem-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordMidhemTibiaKeywordPage />;
}
