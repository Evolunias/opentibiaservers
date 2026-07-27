import TibiaoriginsGuildsKeywordPage, { generateMetadata } from './tibiaorigins-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaoriginsGuildsKeywordPage />;
}
