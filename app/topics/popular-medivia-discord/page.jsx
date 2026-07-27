import PopularMediviaDiscordKeywordPage, { generateMetadata } from './popular-medivia-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMediviaDiscordKeywordPage />;
}
