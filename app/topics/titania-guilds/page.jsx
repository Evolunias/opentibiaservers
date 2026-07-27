import TitaniaGuildsKeywordPage, { generateMetadata } from './titania-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TitaniaGuildsKeywordPage />;
}
