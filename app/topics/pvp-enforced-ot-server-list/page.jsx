import PvpEnforcedOtServerListKeywordPage, { generateMetadata } from './pvp-enforced-ot-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedOtServerListKeywordPage />;
}
