import WithDiscordStatusBrazilKeywordPage, { generateMetadata } from './with-discord-status-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordStatusBrazilKeywordPage />;
}
