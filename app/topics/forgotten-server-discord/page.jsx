import ForgottenServerDiscordKeywordPage, { generateMetadata } from './forgotten-server-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ForgottenServerDiscordKeywordPage />;
}
