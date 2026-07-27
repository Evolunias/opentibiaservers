import ActiveTibiantisDiscordKeywordPage, { generateMetadata } from './active-tibiantis-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiantisDiscordKeywordPage />;
}
