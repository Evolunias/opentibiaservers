import PvpEnforcedOtServerUsaKeywordPage, { generateMetadata } from './pvp-enforced-ot-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedOtServerUsaKeywordPage />;
}
