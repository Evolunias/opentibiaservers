import VenoreotWithDiscordServerUsaKeywordPage, { generateMetadata } from './venoreot-with-discord-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotWithDiscordServerUsaKeywordPage />;
}
