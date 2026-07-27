import CurrentDemolidoresDiscordKeywordPage, { generateMetadata } from './current-demolidores-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentDemolidoresDiscordKeywordPage />;
}
