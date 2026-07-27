import ReneraGuildsKeywordPage, { generateMetadata } from './renera-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ReneraGuildsKeywordPage />;
}
