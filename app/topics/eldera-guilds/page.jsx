import ElderaGuildsKeywordPage, { generateMetadata } from './eldera-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaGuildsKeywordPage />;
}
