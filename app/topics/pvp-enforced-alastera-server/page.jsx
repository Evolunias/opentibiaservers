import PvpEnforcedAlasteraServerKeywordPage, { generateMetadata } from './pvp-enforced-alastera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedAlasteraServerKeywordPage />;
}
