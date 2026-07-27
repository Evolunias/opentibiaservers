import ActiveHarmoniaOtDiscordKeywordPage, { generateMetadata } from './active-harmonia-ot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveHarmoniaOtDiscordKeywordPage />;
}
