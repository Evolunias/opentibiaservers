import Midhem11PvpEnforcedServerKeywordPage, { generateMetadata } from './midhem-11-pvp-enforced-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem11PvpEnforcedServerKeywordPage />;
}
