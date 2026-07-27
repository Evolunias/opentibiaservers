import PvpEnforcedOlderaServerKeywordPage, { generateMetadata } from './pvp-enforced-oldera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedOlderaServerKeywordPage />;
}
