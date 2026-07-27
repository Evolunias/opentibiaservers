import NeranaGuildsKeywordPage, { generateMetadata } from './nerana-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NeranaGuildsKeywordPage />;
}
