import ActiveXanteriaDiscordKeywordPage, { generateMetadata } from './active-xanteria-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveXanteriaDiscordKeywordPage />;
}
