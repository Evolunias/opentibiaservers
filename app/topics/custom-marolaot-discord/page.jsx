import CustomMarolaotDiscordKeywordPage, { generateMetadata } from './custom-marolaot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMarolaotDiscordKeywordPage />;
}
