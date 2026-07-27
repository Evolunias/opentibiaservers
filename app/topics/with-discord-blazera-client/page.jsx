import WithDiscordBlazeraClientKeywordPage, { generateMetadata } from './with-discord-blazera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordBlazeraClientKeywordPage />;
}
