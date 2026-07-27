import TopXanteriaDiscordKeywordPage, { generateMetadata } from './top-xanteria-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopXanteriaDiscordKeywordPage />;
}
