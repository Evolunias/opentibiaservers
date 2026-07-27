import CanobGuildsKeywordPage, { generateMetadata } from './canob-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobGuildsKeywordPage />;
}
