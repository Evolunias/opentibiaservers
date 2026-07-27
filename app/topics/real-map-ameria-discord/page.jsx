import RealMapAmeriaDiscordKeywordPage, { generateMetadata } from './real-map-ameria-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapAmeriaDiscordKeywordPage />;
}
