import SabrehavenGuildsKeywordPage, { generateMetadata } from './sabrehaven-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenGuildsKeywordPage />;
}
