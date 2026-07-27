import NewXanteriaDiscordKeywordPage, { generateMetadata } from './new-xanteria-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewXanteriaDiscordKeywordPage />;
}
