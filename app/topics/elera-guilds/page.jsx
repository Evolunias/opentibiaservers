import EleraGuildsKeywordPage, { generateMetadata } from './elera-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EleraGuildsKeywordPage />;
}
