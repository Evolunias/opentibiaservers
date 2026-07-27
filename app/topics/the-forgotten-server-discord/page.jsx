import TheForgottenServerDiscordKeywordPage, { generateMetadata } from './the-forgotten-server-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TheForgottenServerDiscordKeywordPage />;
}
