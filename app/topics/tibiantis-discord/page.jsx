import TibiantisDiscordKeywordPage, { generateMetadata } from './tibiantis-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisDiscordKeywordPage />;
}
