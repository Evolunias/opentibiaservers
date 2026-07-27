import PvpEnforcedEvoleraServerKeywordPage, { generateMetadata } from './pvp-enforced-evolera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedEvoleraServerKeywordPage />;
}
