import HarmoniaOtDiscordKeywordPage, { generateMetadata } from './harmonia-ot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOtDiscordKeywordPage />;
}
