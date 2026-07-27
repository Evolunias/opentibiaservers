import LuceraGuildsKeywordPage, { generateMetadata } from './lucera-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LuceraGuildsKeywordPage />;
}
