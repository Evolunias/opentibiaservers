import HarmoniaOt12WithDiscordServerKeywordPage, { generateMetadata } from './harmonia-ot-12-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt12WithDiscordServerKeywordPage />;
}
