import CurrentAlasteraDiscordKeywordPage, { generateMetadata } from './current-alastera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentAlasteraDiscordKeywordPage />;
}
