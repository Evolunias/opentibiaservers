import PopularHarmoniaOtDiscordKeywordPage, { generateMetadata } from './popular-harmonia-ot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularHarmoniaOtDiscordKeywordPage />;
}
