import GuardiaGuildsKeywordPage, { generateMetadata } from './guardia-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GuardiaGuildsKeywordPage />;
}
