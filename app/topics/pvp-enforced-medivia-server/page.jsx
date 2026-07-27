import PvpEnforcedMediviaServerKeywordPage, { generateMetadata } from './pvp-enforced-medivia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedMediviaServerKeywordPage />;
}
