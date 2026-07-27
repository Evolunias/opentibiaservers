import EvoluniaGuildsKeywordPage, { generateMetadata } from './evolunia-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaGuildsKeywordPage />;
}
