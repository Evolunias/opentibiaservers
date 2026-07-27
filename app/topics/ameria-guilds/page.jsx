import AmeriaGuildsKeywordPage, { generateMetadata } from './ameria-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaGuildsKeywordPage />;
}
