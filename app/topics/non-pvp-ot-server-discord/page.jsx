import NonPvpOtServerDiscordKeywordPage, { generateMetadata } from './non-pvp-ot-server-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpOtServerDiscordKeywordPage />;
}
