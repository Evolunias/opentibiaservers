import WithDiscordStatusUsaKeywordPage, { generateMetadata } from './with-discord-status-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordStatusUsaKeywordPage />;
}
