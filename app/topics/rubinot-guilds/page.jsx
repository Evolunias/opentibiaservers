import RubinotGuildsKeywordPage, { generateMetadata } from './rubinot-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotGuildsKeywordPage />;
}
