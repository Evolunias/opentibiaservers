import PopularTibianusDiscordKeywordPage, { generateMetadata } from './popular-tibianus-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibianusDiscordKeywordPage />;
}
