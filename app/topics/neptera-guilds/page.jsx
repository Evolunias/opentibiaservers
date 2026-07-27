import NepteraGuildsKeywordPage, { generateMetadata } from './neptera-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepteraGuildsKeywordPage />;
}
