import HighrateTibiantisDiscordKeywordPage, { generateMetadata } from './highrate-tibiantis-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiantisDiscordKeywordPage />;
}
