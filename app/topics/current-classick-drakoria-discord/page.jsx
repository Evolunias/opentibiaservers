import CurrentClassickDrakoriaDiscordKeywordPage, { generateMetadata } from './current-classick-drakoria-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentClassickDrakoriaDiscordKeywordPage />;
}
