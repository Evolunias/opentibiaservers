import ClassicusDiscordKeywordPage, { generateMetadata } from './classicus-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusDiscordKeywordPage />;
}
