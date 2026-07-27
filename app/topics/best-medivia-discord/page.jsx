import BestMediviaDiscordKeywordPage, { generateMetadata } from './best-medivia-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestMediviaDiscordKeywordPage />;
}
