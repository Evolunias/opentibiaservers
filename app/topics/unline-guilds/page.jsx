import UnlineGuildsKeywordPage, { generateMetadata } from './unline-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineGuildsKeywordPage />;
}
