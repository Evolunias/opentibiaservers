import LowExpDiscordSwedenKeywordPage, { generateMetadata } from './low-exp-discord-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpDiscordSwedenKeywordPage />;
}
