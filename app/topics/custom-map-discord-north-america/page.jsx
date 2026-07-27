import CustomMapDiscordNorthAmericaKeywordPage, { generateMetadata } from './custom-map-discord-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapDiscordNorthAmericaKeywordPage />;
}
