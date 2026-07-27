import CurrentAmeriaDiscordKeywordPage, { generateMetadata } from './current-ameria-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentAmeriaDiscordKeywordPage />;
}
