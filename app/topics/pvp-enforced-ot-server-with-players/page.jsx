import PvpEnforcedOtServerWithPlayersKeywordPage, { generateMetadata } from './pvp-enforced-ot-server-with-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedOtServerWithPlayersKeywordPage />;
}
