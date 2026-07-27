import CustomMapDiscordArgentinaKeywordPage, { generateMetadata } from './custom-map-discord-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapDiscordArgentinaKeywordPage />;
}
