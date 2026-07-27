import HarmoniaOt100WithDiscordServerKeywordPage, { generateMetadata } from './harmonia-ot-10-0-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt100WithDiscordServerKeywordPage />;
}
