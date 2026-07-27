import CustomMiracleDiscordKeywordPage, { generateMetadata } from './custom-miracle-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMiracleDiscordKeywordPage />;
}
