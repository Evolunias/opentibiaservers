import WithDiscordCalmeraOtOpenTibiaKeywordPage, { generateMetadata } from './with-discord-calmera-ot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCalmeraOtOpenTibiaKeywordPage />;
}
