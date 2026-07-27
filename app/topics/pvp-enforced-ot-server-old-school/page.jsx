import PvpEnforcedOtServerOldSchoolKeywordPage, { generateMetadata } from './pvp-enforced-ot-server-old-school';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedOtServerOldSchoolKeywordPage />;
}
