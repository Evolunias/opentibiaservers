import WithDiscordBlazeraKeywordPage, { generateMetadata } from './with-discord-blazera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordBlazeraKeywordPage />;
}
