import WithDiscordStatusFranceKeywordPage, { generateMetadata } from './with-discord-status-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordStatusFranceKeywordPage />;
}
