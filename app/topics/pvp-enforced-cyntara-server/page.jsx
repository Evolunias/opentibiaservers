import PvpEnforcedCyntaraServerKeywordPage, { generateMetadata } from './pvp-enforced-cyntara-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedCyntaraServerKeywordPage />;
}
