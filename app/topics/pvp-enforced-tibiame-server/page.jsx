import PvpEnforcedTibiameServerKeywordPage, { generateMetadata } from './pvp-enforced-tibiame-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedTibiameServerKeywordPage />;
}
