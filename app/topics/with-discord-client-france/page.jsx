import WithDiscordClientFranceKeywordPage, { generateMetadata } from './with-discord-client-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordClientFranceKeywordPage />;
}
