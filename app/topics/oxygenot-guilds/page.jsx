import OxygenotGuildsKeywordPage, { generateMetadata } from './oxygenot-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotGuildsKeywordPage />;
}
