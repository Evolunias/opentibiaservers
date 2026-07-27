import Midhem12PvpEnforcedServerKeywordPage, { generateMetadata } from './midhem-12-pvp-enforced-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem12PvpEnforcedServerKeywordPage />;
}
