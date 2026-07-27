import TopAmeriaDiscordKeywordPage, { generateMetadata } from './top-ameria-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopAmeriaDiscordKeywordPage />;
}
