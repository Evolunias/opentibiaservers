import FreshStartDiscordUsaKeywordPage, { generateMetadata } from './fresh-start-discord-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartDiscordUsaKeywordPage />;
}
