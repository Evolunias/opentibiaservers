import TopTibianusDiscordKeywordPage, { generateMetadata } from './top-tibianus-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibianusDiscordKeywordPage />;
}
