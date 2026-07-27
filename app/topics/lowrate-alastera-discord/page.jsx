import LowrateAlasteraDiscordKeywordPage, { generateMetadata } from './lowrate-alastera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateAlasteraDiscordKeywordPage />;
}
