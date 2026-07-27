import FreshStartAmeriaDiscordKeywordPage, { generateMetadata } from './fresh-start-ameria-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartAmeriaDiscordKeywordPage />;
}
