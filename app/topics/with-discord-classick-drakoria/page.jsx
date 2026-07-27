import WithDiscordClassickDrakoriaKeywordPage, { generateMetadata } from './with-discord-classick-drakoria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordClassickDrakoriaKeywordPage />;
}
