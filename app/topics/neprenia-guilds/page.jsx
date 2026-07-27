import NepreniaGuildsKeywordPage, { generateMetadata } from './neprenia-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaGuildsKeywordPage />;
}
