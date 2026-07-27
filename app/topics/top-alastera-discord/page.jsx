import TopAlasteraDiscordKeywordPage, { generateMetadata } from './top-alastera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopAlasteraDiscordKeywordPage />;
}
