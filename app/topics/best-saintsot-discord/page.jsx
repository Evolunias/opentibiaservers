import BestSaintsotDiscordKeywordPage, { generateMetadata } from './best-saintsot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestSaintsotDiscordKeywordPage />;
}
