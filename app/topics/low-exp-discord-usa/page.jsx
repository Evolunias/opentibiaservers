import LowExpDiscordUsaKeywordPage, { generateMetadata } from './low-exp-discord-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpDiscordUsaKeywordPage />;
}
