import PopularAlasteraDiscordKeywordPage, { generateMetadata } from './popular-alastera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularAlasteraDiscordKeywordPage />;
}
