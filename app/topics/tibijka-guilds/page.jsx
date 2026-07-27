import TibijkaGuildsKeywordPage, { generateMetadata } from './tibijka-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaGuildsKeywordPage />;
}
