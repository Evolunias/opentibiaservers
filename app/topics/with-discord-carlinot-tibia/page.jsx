import WithDiscordCarlinotTibiaKeywordPage, { generateMetadata } from './with-discord-carlinot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCarlinotTibiaKeywordPage />;
}
