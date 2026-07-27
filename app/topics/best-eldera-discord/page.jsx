import BestElderaDiscordKeywordPage, { generateMetadata } from './best-eldera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestElderaDiscordKeywordPage />;
}
