import HarmoniaOt14WithDiscordServerKeywordPage, { generateMetadata } from './harmonia-ot-14-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt14WithDiscordServerKeywordPage />;
}
