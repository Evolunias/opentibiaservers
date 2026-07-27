import PvpEnforcedTibianusServerKeywordPage, { generateMetadata } from './pvp-enforced-tibianus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedTibianusServerKeywordPage />;
}
