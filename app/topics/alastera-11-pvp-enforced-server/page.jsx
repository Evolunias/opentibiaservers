import Alastera11PvpEnforcedServerKeywordPage, { generateMetadata } from './alastera-11-pvp-enforced-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera11PvpEnforcedServerKeywordPage />;
}
