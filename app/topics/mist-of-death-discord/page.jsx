import MistOfDeathDiscordKeywordPage, { generateMetadata } from './mist-of-death-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MistOfDeathDiscordKeywordPage />;
}
