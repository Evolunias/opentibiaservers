import Alastera15PvpEnforcedServerKeywordPage, { generateMetadata } from './alastera-15-pvp-enforced-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera15PvpEnforcedServerKeywordPage />;
}
