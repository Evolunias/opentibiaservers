import VenoreotGuildsKeywordPage, { generateMetadata } from './venoreot-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotGuildsKeywordPage />;
}
