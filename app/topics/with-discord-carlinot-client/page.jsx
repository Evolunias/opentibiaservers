import WithDiscordCarlinotClientKeywordPage, { generateMetadata } from './with-discord-carlinot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCarlinotClientKeywordPage />;
}
