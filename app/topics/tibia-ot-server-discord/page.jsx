import TibiaOtServerDiscordKeywordPage, { generateMetadata } from './tibia-ot-server-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaOtServerDiscordKeywordPage />;
}
