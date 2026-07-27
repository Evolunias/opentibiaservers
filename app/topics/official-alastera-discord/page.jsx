import OfficialAlasteraDiscordKeywordPage, { generateMetadata } from './official-alastera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialAlasteraDiscordKeywordPage />;
}
