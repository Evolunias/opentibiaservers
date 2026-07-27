import PvpEnforcedNepreniaServerKeywordPage, { generateMetadata } from './pvp-enforced-neprenia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedNepreniaServerKeywordPage />;
}
