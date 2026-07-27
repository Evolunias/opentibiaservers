import PopularInfernalOtDiscordKeywordPage, { generateMetadata } from './popular-infernal-ot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularInfernalOtDiscordKeywordPage />;
}
