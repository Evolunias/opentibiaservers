import NilotGuildsKeywordPage, { generateMetadata } from './nilot-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotGuildsKeywordPage />;
}
