import MediviaDiscordKeywordPage, { generateMetadata } from './medivia-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaDiscordKeywordPage />;
}
