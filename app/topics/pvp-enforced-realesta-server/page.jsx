import PvpEnforcedRealestaServerKeywordPage, { generateMetadata } from './pvp-enforced-realesta-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedRealestaServerKeywordPage />;
}
