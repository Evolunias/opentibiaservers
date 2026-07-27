import PvpEnforcedSaintsotServerKeywordPage, { generateMetadata } from './pvp-enforced-saintsot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedSaintsotServerKeywordPage />;
}
