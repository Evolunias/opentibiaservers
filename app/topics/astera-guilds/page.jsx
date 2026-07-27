import AsteraGuildsKeywordPage, { generateMetadata } from './astera-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AsteraGuildsKeywordPage />;
}
