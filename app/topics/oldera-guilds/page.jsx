import OlderaGuildsKeywordPage, { generateMetadata } from './oldera-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaGuildsKeywordPage />;
}
