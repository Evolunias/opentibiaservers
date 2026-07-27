import WithDiscordClientCanadaKeywordPage, { generateMetadata } from './with-discord-client-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordClientCanadaKeywordPage />;
}
