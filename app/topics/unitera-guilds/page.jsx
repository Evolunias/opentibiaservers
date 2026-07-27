import UniteraGuildsKeywordPage, { generateMetadata } from './unitera-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UniteraGuildsKeywordPage />;
}
