import Classicus11PvpEnforcedServerKeywordPage, { generateMetadata } from './classicus-11-pvp-enforced-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus11PvpEnforcedServerKeywordPage />;
}
