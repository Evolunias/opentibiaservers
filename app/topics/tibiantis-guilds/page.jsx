import TibiantisGuildsKeywordPage, { generateMetadata } from './tibiantis-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisGuildsKeywordPage />;
}
