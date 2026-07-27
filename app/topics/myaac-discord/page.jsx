import MyaacDiscordKeywordPage, { generateMetadata } from './myaac-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MyaacDiscordKeywordPage />;
}
