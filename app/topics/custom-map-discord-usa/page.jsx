import CustomMapDiscordUsaKeywordPage, { generateMetadata } from './custom-map-discord-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapDiscordUsaKeywordPage />;
}
