import WithDiscordCalmeraOtTibiaKeywordPage, { generateMetadata } from './with-discord-calmera-ot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCalmeraOtTibiaKeywordPage />;
}
