import AmeraGuildsKeywordPage, { generateMetadata } from './amera-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeraGuildsKeywordPage />;
}
