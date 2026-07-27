import OlderaDiscordKeywordPage, { generateMetadata } from './oldera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaDiscordKeywordPage />;
}
