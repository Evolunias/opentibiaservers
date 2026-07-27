import BestTibiantisDiscordKeywordPage, { generateMetadata } from './best-tibiantis-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiantisDiscordKeywordPage />;
}
