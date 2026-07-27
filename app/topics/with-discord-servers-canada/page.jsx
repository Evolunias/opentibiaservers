import WithDiscordServersCanadaKeywordPage, { generateMetadata } from './with-discord-servers-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordServersCanadaKeywordPage />;
}
