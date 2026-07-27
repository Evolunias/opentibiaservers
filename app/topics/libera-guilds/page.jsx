import LiberaGuildsKeywordPage, { generateMetadata } from './libera-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LiberaGuildsKeywordPage />;
}
