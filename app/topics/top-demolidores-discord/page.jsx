import TopDemolidoresDiscordKeywordPage, { generateMetadata } from './top-demolidores-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopDemolidoresDiscordKeywordPage />;
}
