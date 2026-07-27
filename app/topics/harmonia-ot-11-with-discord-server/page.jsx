import HarmoniaOt11WithDiscordServerKeywordPage, { generateMetadata } from './harmonia-ot-11-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt11WithDiscordServerKeywordPage />;
}
