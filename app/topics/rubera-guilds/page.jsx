import RuberaGuildsKeywordPage, { generateMetadata } from './rubera-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RuberaGuildsKeywordPage />;
}
