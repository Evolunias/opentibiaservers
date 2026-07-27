import NewAlasteraDiscordKeywordPage, { generateMetadata } from './new-alastera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewAlasteraDiscordKeywordPage />;
}
