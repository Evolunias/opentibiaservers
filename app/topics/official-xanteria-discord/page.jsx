import OfficialXanteriaDiscordKeywordPage, { generateMetadata } from './official-xanteria-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialXanteriaDiscordKeywordPage />;
}
