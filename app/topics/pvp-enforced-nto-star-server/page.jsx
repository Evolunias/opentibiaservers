import PvpEnforcedNtoStarServerKeywordPage, { generateMetadata } from './pvp-enforced-nto-star-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedNtoStarServerKeywordPage />;
}
