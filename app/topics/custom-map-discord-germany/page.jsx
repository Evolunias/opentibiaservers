import CustomMapDiscordGermanyKeywordPage, { generateMetadata } from './custom-map-discord-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapDiscordGermanyKeywordPage />;
}
