import Midhem15PvpEnforcedServerKeywordPage, { generateMetadata } from './midhem-15-pvp-enforced-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem15PvpEnforcedServerKeywordPage />;
}
