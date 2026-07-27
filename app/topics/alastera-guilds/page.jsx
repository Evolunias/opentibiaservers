import AlasteraGuildsKeywordPage, { generateMetadata } from './alastera-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraGuildsKeywordPage />;
}
