import SameraGuildsKeywordPage, { generateMetadata } from './samera-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SameraGuildsKeywordPage />;
}
