import QuinteraGuildsKeywordPage, { generateMetadata } from './quintera-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <QuinteraGuildsKeywordPage />;
}
