import TopThorniaDiscordKeywordPage, { generateMetadata } from './top-thornia-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopThorniaDiscordKeywordPage />;
}
