import PvpEnforcedOtServerActiveKeywordPage, { generateMetadata } from './pvp-enforced-ot-server-active';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedOtServerActiveKeywordPage />;
}
