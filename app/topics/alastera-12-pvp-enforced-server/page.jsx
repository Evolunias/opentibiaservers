import Alastera12PvpEnforcedServerKeywordPage, { generateMetadata } from './alastera-12-pvp-enforced-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera12PvpEnforcedServerKeywordPage />;
}
