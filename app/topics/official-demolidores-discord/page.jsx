import OfficialDemolidoresDiscordKeywordPage, { generateMetadata } from './official-demolidores-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialDemolidoresDiscordKeywordPage />;
}
