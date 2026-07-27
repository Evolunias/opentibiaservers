import CustomMapDiscordSouthAmericaKeywordPage, { generateMetadata } from './custom-map-discord-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapDiscordSouthAmericaKeywordPage />;
}
