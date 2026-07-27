import WithDiscordHarmoniaOtServerKeywordPage, { generateMetadata } from './with-discord-harmonia-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordHarmoniaOtServerKeywordPage />;
}
