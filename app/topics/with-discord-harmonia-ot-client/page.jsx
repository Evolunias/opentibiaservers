import WithDiscordHarmoniaOtClientKeywordPage, { generateMetadata } from './with-discord-harmonia-ot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordHarmoniaOtClientKeywordPage />;
}
