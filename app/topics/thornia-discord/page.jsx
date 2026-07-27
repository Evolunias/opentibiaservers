import ThorniaDiscordKeywordPage, { generateMetadata } from './thornia-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaDiscordKeywordPage />;
}
