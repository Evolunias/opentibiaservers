import SaintsotGuildsKeywordPage, { generateMetadata } from './saintsot-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotGuildsKeywordPage />;
}
