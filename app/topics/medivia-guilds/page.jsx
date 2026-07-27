import MediviaGuildsKeywordPage, { generateMetadata } from './medivia-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaGuildsKeywordPage />;
}
