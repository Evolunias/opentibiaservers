import TopRubinotDiscordKeywordPage, { generateMetadata } from './top-rubinot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRubinotDiscordKeywordPage />;
}
