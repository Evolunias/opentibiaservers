import ForteraGuildsKeywordPage, { generateMetadata } from './fortera-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ForteraGuildsKeywordPage />;
}
