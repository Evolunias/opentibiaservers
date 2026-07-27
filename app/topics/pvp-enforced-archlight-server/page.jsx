import PvpEnforcedArchlightServerKeywordPage, { generateMetadata } from './pvp-enforced-archlight-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedArchlightServerKeywordPage />;
}
