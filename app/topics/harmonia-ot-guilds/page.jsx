import HarmoniaOtGuildsKeywordPage, { generateMetadata } from './harmonia-ot-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOtGuildsKeywordPage />;
}
