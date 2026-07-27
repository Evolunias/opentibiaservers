import CarlinotGuildsKeywordPage, { generateMetadata } from './carlinot-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotGuildsKeywordPage />;
}
