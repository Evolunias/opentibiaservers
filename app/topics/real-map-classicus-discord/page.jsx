import RealMapClassicusDiscordKeywordPage, { generateMetadata } from './real-map-classicus-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapClassicusDiscordKeywordPage />;
}
