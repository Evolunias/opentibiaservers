import ActiveAmeriaDiscordKeywordPage, { generateMetadata } from './active-ameria-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveAmeriaDiscordKeywordPage />;
}
