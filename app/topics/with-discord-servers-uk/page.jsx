import WithDiscordServersUkKeywordPage, { generateMetadata } from './with-discord-servers-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordServersUkKeywordPage />;
}
