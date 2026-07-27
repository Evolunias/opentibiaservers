import CustomMapDiscordSwedenKeywordPage, { generateMetadata } from './custom-map-discord-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapDiscordSwedenKeywordPage />;
}
