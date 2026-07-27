import WithDiscordStatusCanadaKeywordPage, { generateMetadata } from './with-discord-status-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordStatusCanadaKeywordPage />;
}
