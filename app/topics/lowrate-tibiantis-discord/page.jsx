import LowrateTibiantisDiscordKeywordPage, { generateMetadata } from './lowrate-tibiantis-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiantisDiscordKeywordPage />;
}
