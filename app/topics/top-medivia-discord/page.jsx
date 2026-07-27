import TopMediviaDiscordKeywordPage, { generateMetadata } from './top-medivia-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMediviaDiscordKeywordPage />;
}
