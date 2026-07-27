import SecuraGuildsKeywordPage, { generateMetadata } from './secura-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SecuraGuildsKeywordPage />;
}
