import DoleraGuildsKeywordPage, { generateMetadata } from './dolera-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DoleraGuildsKeywordPage />;
}
