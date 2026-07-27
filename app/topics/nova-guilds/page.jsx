import NovaGuildsKeywordPage, { generateMetadata } from './nova-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NovaGuildsKeywordPage />;
}
