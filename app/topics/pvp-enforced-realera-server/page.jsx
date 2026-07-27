import PvpEnforcedRealeraServerKeywordPage, { generateMetadata } from './pvp-enforced-realera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedRealeraServerKeywordPage />;
}
