import TfsServerDiscordKeywordPage, { generateMetadata } from './tfs-server-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TfsServerDiscordKeywordPage />;
}
