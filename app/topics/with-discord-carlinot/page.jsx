import WithDiscordCarlinotKeywordPage, { generateMetadata } from './with-discord-carlinot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCarlinotKeywordPage />;
}
