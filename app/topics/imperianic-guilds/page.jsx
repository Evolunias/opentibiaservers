import ImperianicGuildsKeywordPage, { generateMetadata } from './imperianic-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ImperianicGuildsKeywordPage />;
}
