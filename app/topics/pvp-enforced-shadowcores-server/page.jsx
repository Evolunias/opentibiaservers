import PvpEnforcedShadowcoresServerKeywordPage, { generateMetadata } from './pvp-enforced-shadowcores-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedShadowcoresServerKeywordPage />;
}
