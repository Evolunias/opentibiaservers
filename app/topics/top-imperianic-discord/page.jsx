import TopImperianicDiscordKeywordPage, { generateMetadata } from './top-imperianic-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopImperianicDiscordKeywordPage />;
}
