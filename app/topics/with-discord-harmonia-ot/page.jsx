import WithDiscordHarmoniaOtKeywordPage, { generateMetadata } from './with-discord-harmonia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordHarmoniaOtKeywordPage />;
}
