import NoxiousotGuildsKeywordPage, { generateMetadata } from './noxiousot-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoxiousotGuildsKeywordPage />;
}
