import RealMapDiscordLatinAmericaKeywordPage, { generateMetadata } from './real-map-discord-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapDiscordLatinAmericaKeywordPage />;
}
