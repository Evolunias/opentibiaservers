import TibianusGuildsKeywordPage, { generateMetadata } from './tibianus-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusGuildsKeywordPage />;
}
