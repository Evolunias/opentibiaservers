import OfficialAmeriaDiscordKeywordPage, { generateMetadata } from './official-ameria-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialAmeriaDiscordKeywordPage />;
}
