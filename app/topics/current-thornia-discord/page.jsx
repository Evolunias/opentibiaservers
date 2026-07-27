import CurrentThorniaDiscordKeywordPage, { generateMetadata } from './current-thornia-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentThorniaDiscordKeywordPage />;
}
