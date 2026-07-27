import LowExpDiscordPolandKeywordPage, { generateMetadata } from './low-exp-discord-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpDiscordPolandKeywordPage />;
}
