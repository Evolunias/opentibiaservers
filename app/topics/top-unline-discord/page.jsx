import TopUnlineDiscordKeywordPage, { generateMetadata } from './top-unline-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopUnlineDiscordKeywordPage />;
}
