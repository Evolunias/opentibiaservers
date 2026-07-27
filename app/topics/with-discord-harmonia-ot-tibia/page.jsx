import WithDiscordHarmoniaOtTibiaKeywordPage, { generateMetadata } from './with-discord-harmonia-ot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordHarmoniaOtTibiaKeywordPage />;
}
