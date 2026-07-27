import AldoraGuildsKeywordPage, { generateMetadata } from './aldora-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AldoraGuildsKeywordPage />;
}
