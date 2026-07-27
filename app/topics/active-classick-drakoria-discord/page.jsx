import ActiveClassickDrakoriaDiscordKeywordPage, { generateMetadata } from './active-classick-drakoria-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveClassickDrakoriaDiscordKeywordPage />;
}
