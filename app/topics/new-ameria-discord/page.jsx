import NewAmeriaDiscordKeywordPage, { generateMetadata } from './new-ameria-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewAmeriaDiscordKeywordPage />;
}
