import MistOfDeathGuildsKeywordPage, { generateMetadata } from './mist-of-death-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MistOfDeathGuildsKeywordPage />;
}
