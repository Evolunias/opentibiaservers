import HarmoniaOt15WithDiscordServerKeywordPage, { generateMetadata } from './harmonia-ot-15-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt15WithDiscordServerKeywordPage />;
}
