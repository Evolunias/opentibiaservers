import PytheraGuildsKeywordPage, { generateMetadata } from './pythera-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PytheraGuildsKeywordPage />;
}
