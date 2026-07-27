import RealMapSerenityDiscordKeywordPage, { generateMetadata } from './real-map-serenity-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapSerenityDiscordKeywordPage />;
}
