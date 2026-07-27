import TenebraGuildsKeywordPage, { generateMetadata } from './tenebra-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TenebraGuildsKeywordPage />;
}
