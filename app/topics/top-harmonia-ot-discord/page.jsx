import TopHarmoniaOtDiscordKeywordPage, { generateMetadata } from './top-harmonia-ot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopHarmoniaOtDiscordKeywordPage />;
}
