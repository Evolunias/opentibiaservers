import NonPvpDiscordBrazilKeywordPage, { generateMetadata } from './non-pvp-discord-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpDiscordBrazilKeywordPage />;
}
