import WithDiscordServersUsaKeywordPage, { generateMetadata } from './with-discord-servers-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordServersUsaKeywordPage />;
}
