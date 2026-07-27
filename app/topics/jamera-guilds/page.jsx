import JameraGuildsKeywordPage, { generateMetadata } from './jamera-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <JameraGuildsKeywordPage />;
}
