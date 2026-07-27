import BestSabrehavenDiscordKeywordPage, { generateMetadata } from './best-sabrehaven-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestSabrehavenDiscordKeywordPage />;
}
