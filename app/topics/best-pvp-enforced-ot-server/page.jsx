import BestPvpEnforcedOtServerKeywordPage, { generateMetadata } from './best-pvp-enforced-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestPvpEnforcedOtServerKeywordPage />;
}
