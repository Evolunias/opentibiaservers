import PopularOxygenotDiscordKeywordPage, { generateMetadata } from './popular-oxygenot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularOxygenotDiscordKeywordPage />;
}
