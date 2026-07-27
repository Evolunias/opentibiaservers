import NewHarmoniaOtDiscordKeywordPage, { generateMetadata } from './new-harmonia-ot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewHarmoniaOtDiscordKeywordPage />;
}
