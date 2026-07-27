import BestXanteriaDiscordKeywordPage, { generateMetadata } from './best-xanteria-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestXanteriaDiscordKeywordPage />;
}
