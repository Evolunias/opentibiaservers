import CustomMapDiscordBrazilKeywordPage, { generateMetadata } from './custom-map-discord-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapDiscordBrazilKeywordPage />;
}
